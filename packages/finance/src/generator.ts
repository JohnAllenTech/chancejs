import { Generator, GeneratorOptions, n } from '@chancejs/generator'
import { Picker } from '@chancejs/pick'

import { IFinance, FinanceOptions } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'
import { IntegerGenerator } from '@chancejs/integer'
import { CCTypeReturnType, CcTypeOptions, cc_types } from './cc_type'
import { CcOptions } from './cc'
import { calculateCheckDigit } from './cc/util/luhnCheck'
import { CurrencyOptions, currencies } from './currency'
import { CurrencyPairOptions, CurrencyPairReturnType } from './currency_pair'

export class Finance extends Generator implements IFinance {
  private naturalGenerator: NaturalGenerator
  private picker: Picker
  private integer: IntegerGenerator

  constructor(options: GeneratorOptions) {
    super(options)
    this.naturalGenerator = new NaturalGenerator(options)
    this.picker = new Picker(options)
    this.integer = new IntegerGenerator(options)
  }

  public cc(options?: CcOptions): string {
    const ccType = this.cc_type({ name: options?.type, raw: true })
    const digitsToGenerate = ccType.length - ccType.prefix.length - 1

    // cc number starts with the prefix
    let number = ccType.prefix
    // Generates n - 1 digits
    n(() => {
      number += this.integer.integer({ min: 0, max: 9 }).toString()
    }, digitsToGenerate)
    // Generates the last digit according to Luhn algorithm
    return (number += calculateCheckDigit(number))
  }

  public cc_type<O extends CcTypeOptions>(options?: O): CCTypeReturnType<O> {
    const types = cc_types
    let type = null

    if (options?.name) {
      for (let i = 0; i < types.length; i++) {
        // Accept either name or short_name to specify card type
        if (
          types[i].name === options.name ||
          types[i].short_name === options.name
        ) {
          type = types[i]
          break
        }
      }
      if (type === null) {
        throw new RangeError(
          "Chance: Credit card type '" + options.name + "' is not supported"
        )
      }
    } else {
      type = this.picker.pickOne(types)
    }

    return (options?.raw ? type : type.name) as CCTypeReturnType<O>
  }

  public currency(_options?: CurrencyOptions) {
    return this.picker.pickOne(currencies)
  }
  public currency_pair<O extends CurrencyPairOptions>(
    options?: O
  ): CurrencyPairReturnType<O> {
    const currencyPair = this.picker.pickSet(currencies, 2)
    return (
      options?.string
        ? `${currencyPair[0].code}/${currencyPair[1].code}`
        : [currencyPair[0], currencyPair[1]]
    ) as CurrencyPairReturnType<O>
  }
  public dollar(options?: FinanceOptions): string {
    return 'string'
  }
  public euro(options?: FinanceOptions): string {
    return 'string'
  }
  public exp(options?: FinanceOptions): string {
    return 'string'
  }
  public exp_month(options?: FinanceOptions): string {
    return 'string'
  }
  public exp_year(options?: FinanceOptions): string {
    return 'string'
  }
}
