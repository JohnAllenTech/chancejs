import { Generator, GeneratorOptions, n } from '@chancejs/generator'
import { Picker } from '@chancejs/pick'
import { IFinance, FinanceOptions } from './interfaces'
import { FloatingGenerator } from '@chancejs/floating'
import { StringGenerator } from '@chancejs/string'
import { Utils } from '@chancejs/utils'
import { Time } from '@chancejs/time'

import { CCTypeReturnType, CcTypeOptions, cc_types } from './cc_type'
import { CcOptions } from './cc'
import { calculateCheckDigit } from './cc/util/luhnCheck'
import { CurrencyOptions, currencies } from './currency'
import { CurrencyPairOptions, CurrencyPairReturnType } from './currency_pair'
import { DollarOptions } from './dollar'
import { EuroOptions } from './euro'
import { ExpMonthOptions } from './exp_month'
import { ExpOptions, ExpReturnType, RawExp } from './exp'
import { IbanOptions, alpha, alphanum } from './iban'
import { NaturalGenerator } from '@chancejs/natural'

export class Finance extends Generator implements IFinance {
  private picker: Picker
  private natural: NaturalGenerator
  private string: StringGenerator
  private float: FloatingGenerator
  private time: Time
  private utils: Utils

  constructor(options: GeneratorOptions) {
    super(options)
    this.picker = new Picker(options)
    this.natural = new NaturalGenerator(options)
    this.string = new StringGenerator(options)
    this.float = new FloatingGenerator(options)
    this.time = new Time(options)
    this.utils = new Utils(options)
  }

  public cc(options?: CcOptions): string {
    const ccType = this.cc_type({ name: options?.type, raw: true })
    const digitsToGenerate = ccType.length - ccType.prefix.length - 1

    // cc number starts with the prefix
    let number = ccType.prefix
    // Generates n - 1 digits
    n(() => {
      number += this.natural.natural({ max: 9 }).toString()
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
  public dollar(options?: DollarOptions): string {
    let dollar = this.float
      .floating({
        min: options?.min,
        max: options?.max ?? 10000,
        fixed: 2,
      })
      .toString()

    const cents = dollar.split('.')[1]

    if (!cents) {
      dollar += '.00'
    } else if (cents.length < 2) {
      dollar = dollar + '0'
    }

    return parseInt(dollar) < 0 ? '-$' + dollar.replace('-', '') : '$' + dollar
  }
  public euro(options?: EuroOptions): string {
    let euro = this.float
      .floating({
        min: options?.min,
        max: options?.max ?? 10000,
        fixed: 2,
      })
      .toString()

    const cent = euro.split('.')[1]

    if (!cent) {
      euro += '.00'
    } else if (cent.length < 2) {
      euro += '0'
    }

    return parseInt(euro) < 0 ? '-' + euro.replace('-', '') + '€' : euro + '€'
  }
  public exp<O extends ExpOptions>(options?: O): ExpReturnType<O> {
    const year = this.exp_year()
    let exp: RawExp = {
      year: year,
      month:
        year === new Date().getFullYear().toString()
          ? this.exp_month({ future: true })
          : this.exp_month(),
    }

    // If the year is this year, need to ensure month is greater than the
    // current month or this expiration will not be valid
    if (exp.year === new Date().getFullYear().toString()) {
      exp.month = this.exp_month({ future: true })
    } else {
      exp.month = this.exp_month()
    }

    return (options?.raw ? exp : exp.month + '/' + exp.year) as ExpReturnType<O>
  }
  public exp_month(options?: ExpMonthOptions): string {
    let month,
      month_int,
      // Date object months are 0 indexed
      curMonth = new Date().getMonth() + 1

    if (options?.future && curMonth !== 12) {
      do {
        month = this.time.month({ raw: true }).numeric
        month_int = parseInt(month, 10)
      } while (month_int <= curMonth)
    } else {
      month = this.time.month({ raw: true }).numeric
    }
    return month
  }
  public exp_year(options?: FinanceOptions): string {
    const date = new Date()
    const curMonth = date.getMonth() + 1
    const curYear = date.getFullYear()

    return this.time.year({
      min: curMonth === 12 ? curYear + 1 : curYear,
      max: curYear + 10,
    })
  }
  public iban() {
    return (
      this.string.string({ length: 2, pool: alpha }) +
      this.utils.pad(this.natural.natural({ max: 99 }), 2) +
      this.string.string({ length: 4, pool: alphanum }) +
      this.utils.pad(
        this.natural.natural(),
        this.natural.natural({ min: 6, max: 26 })
      )
    )
  }
}
