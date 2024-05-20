import { WebOptions } from '../interfaces'

export interface CompanyOptions extends WebOptions {}

export interface CompanyGeneratorFunction {
  /**
   * returns a random company name.
   *
   * @param { CompanyOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * company()
   */
  (): string
}
