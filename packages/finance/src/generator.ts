import { Generator, GeneratorOptions } from '@chancejs/generator'
import { IFinance, FinanceOptions } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'

export class Finance extends Generator implements IFinance {
  private naturalGenerator: NaturalGenerator

  constructor(options: GeneratorOptions) {
    super(options)
    this.naturalGenerator = new NaturalGenerator(options)
  }

  //   cc: FinanceGeneratorFunction
  //   cc_type: FinanceGeneratorFunction
  //   currency: FinanceGeneratorFunction
  //   currency_pair: FinanceGeneratorFunction
  //   dollar: FinanceGeneratorFunction
  //   euro: FinanceGeneratorFunction
  //   exp: FinanceGeneratorFunction
  //   exp_month: FinanceGeneratorFunction
  //   exp_year: FinanceGeneratorFunction

  public cc(options?: FinanceOptions): string {
    return 'string'
  }

  public cc_type(options?: FinanceOptions): string {
    return 'string'
  }

  public currency(options?: FinanceOptions): string {
    return 'string'
  }
  public currency_pair(options?: FinanceOptions): string {
    return 'string'
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
