import { FinanceOptions } from '../interfaces'

export interface ExpYearOptions extends FinanceOptions {}

export interface ExpYearGeneratorFunction {
  /**
   * Returns a random exp_year.
   *
   * @param { ExpYearOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * exp_year()
   */
  (options?: ExpYearOptions): string
}
