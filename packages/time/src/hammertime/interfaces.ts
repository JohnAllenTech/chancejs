import { TimeOptions } from '../interfaces'

export interface HammertimeOptions extends TimeOptions {}

export interface HammertimeGeneratorFunction {
  /**
   * Returns a random millisecond between 1970 Jan 1 and now.
   *
   * @param { HammertimeOptions} [options={}]
   * @return { number }
   * @example
   * // returns number
   * hammertime()
   */
  (options?: HammertimeOptions): number
}
