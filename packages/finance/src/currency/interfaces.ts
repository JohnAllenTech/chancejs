import { FinanceOptions } from '../interfaces'

export interface CurrencyOptions extends FinanceOptions {}

export type Currency = {
  code: string
  name: string
}

export interface CurrencyGeneratorFunction {
  /**
   * Returns a random currency.
   *
   * @param { CurrencyOptions} [options={}]
   * @return { Currency }
   * @example
   * // returns Currency
   * currency()
   */
  (options?: CurrencyOptions): Currency
}
