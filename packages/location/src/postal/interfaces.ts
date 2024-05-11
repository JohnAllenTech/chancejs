import { LocationOptions } from '../interfaces'

export interface PostalOptions extends LocationOptions {}

export interface PostalGeneratorFunction {
  /**
   * Returns a random postal.
   *
   * @param { PostalOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * postal()
   */
  (options?: PostalOptions): string
}
