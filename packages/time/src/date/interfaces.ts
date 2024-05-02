import { TimeOptions } from '../interfaces'

export interface DateOptions extends TimeOptions {
  min?: Date
  max?: Date
  american?: boolean
  year?: number
  month?: number
  day?: number
  hour?: number
  minute?: number
  second?: number
  millisecond?: number
  string?: boolean
}

export interface DateGeneratorFunction {
  /**
   * Returns a random date.
   *
   * @param { DateOptions} [options={}]
   * @return { number }
   * @example
   * // returns string | Date
   * date()
   */
  (options?: DateOptions): string | Date
}
