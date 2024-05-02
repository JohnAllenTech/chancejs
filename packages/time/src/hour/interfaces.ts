import { TimeOptions } from '../interfaces'

export interface HourOptions extends TimeOptions {
  min?: number
  max?: number
  twentyfour?: boolean
}

export interface HourGeneratorFunction {
  /**
   * Returns a random hour in 12 or 24 hour format.
   *
   * @param { HourOptions} [options={}]
   * @return { number }
   * @example
   * // returns number
   * hour()
   */
  (options?: HourOptions): number
}
