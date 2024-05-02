import { TimeOptions } from '../interfaces'

export interface MillisecondOptions extends TimeOptions {}

export interface MillisecondGeneratorFunction {
  /**
   * Returns a random millisecond between 0 and 999.
   *
   * @param { MillisecondOptions} [options={}]
   * @return { number }
   * @example
   * // returns number
   * millisecond()
   */
  (): number
}
