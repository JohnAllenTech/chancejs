import { Currency } from 'src/currency/interfaces'
import { FinanceOptions } from '../interfaces'

export interface CurrencyPairOptions extends FinanceOptions {
  string: boolean
}

export type CurrencyPairReturnType<O extends CurrencyPairOptions> =
  O['string'] extends true ? string : [Currency, Currency]

export type CurrencyPairGeneratorFunction = <O extends CurrencyPairOptions>(
  /**
   * Returns a random currency_pair.
   *
   * @param { CurrencyPairOptions} [options={}]
   * @return { CurrencyPairReturnType<O> }
   * @example
   * // returns tuple of currencies or string
   * currency_pair()
   */
  options?: O
) => CurrencyPairReturnType<O>
