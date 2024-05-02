import { TimeOptions } from '../interfaces'

export interface MinuteOptions extends TimeOptions {
  min?: number
  max?: number
}

export interface MinuteGeneratorFunction {
  /**
   * Returns a random minute.
   *
   * @param { MinuteOptions} [options={}]
   * @return { number }
   * @example
   * // returns number
   * minute()
   */
  (options?: MinuteOptions): number
}
