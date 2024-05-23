import { WebOptions } from '../interfaces'

export interface FbidOptions extends WebOptions {}

export interface FbidGeneratorFunction {
  /**
   * Return a random Facebook id, aka fbid..
   *
   * @param { FbidOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * fbid()
   */
  (options?: FbidOptions): string
}
