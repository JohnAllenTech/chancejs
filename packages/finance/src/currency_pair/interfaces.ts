import { Currency } from 'src/currency/interfaces'
import { FinanceOptions } from '../interfaces'

export interface CurrencyPairOptions extends FinanceOptions {}

export type currencyPair = [Currency, Currency]

export interface CurrencyPairGeneratorFunction {
  /**
   * Returns a random currency_pair.
   *
   * @param { CurrencyPairOptions} [options={}]
   * @return { currencyPair }
   * @example
   * // returns tuple of currencies
   * currency_pair()
   */
  (options?: CurrencyPairOptions): currencyPair
}
