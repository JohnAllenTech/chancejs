import { WebOptions } from '../interfaces'

export interface TldOptions extends WebOptions {}

export interface TldGeneratorFunction {
  /**
   * returns a random top level domain.
   *
   * @param { TldOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * tld()
   */
  (options?: TldOptions): string
}
