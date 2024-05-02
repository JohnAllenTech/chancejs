import { TimeOptions } from '../interfaces'

export interface WeekdayOptions extends TimeOptions {
  weekday_only?: boolean
}

export interface WeekdayGeneratorFunction {
  /**
   * Returns a random weekday.
   *
   * @param { WeekdayOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * weekday()
   */
  (options?: WeekdayOptions): string
}
