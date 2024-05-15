import { CcGeneratorFunction } from './cc'
import { CcTypeGeneratorFunction } from './cc_type'
import { CurrencyGeneratorFunction } from './currency'
import { CurrencyPairGeneratorFunction } from './currency_pair'
import { DollarGeneratorFunction } from './dollar'
import { EuroGeneratorFunction } from './euro'

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
  currency_pair: CurrencyPairGeneratorFunction
  dollar: DollarGeneratorFunction
  euro: EuroGeneratorFunction
  exp: FinanceGeneratorFunction
  exp_month: FinanceGeneratorFunction
  exp_year: FinanceGeneratorFunction
}
