import { WebOptions } from '../interfaces'

export interface TwitterOptions extends WebOptions {}

export interface TwitterGeneratorFunction {
  /**
   * returns a random twitter handle.
   *
   * @param { TwitterOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * twitter()
   */
  (options?: TwitterOptions): string
}
