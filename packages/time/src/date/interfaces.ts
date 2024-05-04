import { TimeOptions } from '../interfaces'

export type DateReturnType<O extends DateOptions> = O['string'] extends true
  ? string
  : Date

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

export type DateGeneratorFunction = <O extends DateOptions>(
  /**
   * Returns a random date.
   *
   * @param { DateOptions} [options={}]
   * @return { string | Date }
   * @example
   * // returns string | Date
   * date()
   */
  options?: O
) => DateReturnType<O>
