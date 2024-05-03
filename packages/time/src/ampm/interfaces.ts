import { TimeOptions } from '../interfaces'

export interface AmpmOptions extends TimeOptions {}

export interface AmpmGeneratorFunction {
  /**
   * Returns 'am' or 'pm' at random.
   *
   * @param { AmpmOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * ampm()
   */
  (options?: AmpmOptions): string
}
