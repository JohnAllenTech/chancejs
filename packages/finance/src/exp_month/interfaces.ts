import { FinanceOptions } from '../interfaces'

export interface ExpMonthOptions extends FinanceOptions {
  future: boolean
}

export interface ExpMonthGeneratorFunction {
  /**
   * Returns a random exp_month.
   *
   * @param { ExpMonthOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * exp_month()
   */
  (options?: ExpMonthOptions): string
}
