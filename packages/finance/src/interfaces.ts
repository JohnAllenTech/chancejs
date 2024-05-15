import { CcGeneratorFunction } from './cc/interfaces'
import { CcTypeGeneratorFunction } from './cc_type/interfaces'
import { CurrencyGeneratorFunction } from './currency/interfaces'

export interface FinanceOptions {
  seed?: number
}

export interface FinanceGeneratorFunction {
  /**
   * provides finance related randomness.
   *
   * @param { FinanceOptions} [options={}]
   * @return { IFinance }
   * @example
   * // returns finance object
   * finance()
   */
  (options?: FinanceOptions): string
}

export interface IFinance {
  cc: CcGeneratorFunction
  cc_type: CcTypeGeneratorFunction
  currency: CurrencyGeneratorFunction
  currency_pair: FinanceGeneratorFunction
  dollar: FinanceGeneratorFunction
  euro: FinanceGeneratorFunction
  exp: FinanceGeneratorFunction
  exp_month: FinanceGeneratorFunction
  exp_year: FinanceGeneratorFunction
}
