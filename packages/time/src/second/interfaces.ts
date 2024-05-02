import { TimeOptions } from '../interfaces'

export interface SecondOptions extends TimeOptions {}

export interface SecondGeneratorFunction {
  /**
   * Returns a random second.
   *
   * @param { SecondOptions} [options={}]
   * @return { number }
   * @example
   * // returns number
   * second()
   */
  (options?: SecondOptions): number
}
