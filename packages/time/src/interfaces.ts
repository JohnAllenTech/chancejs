import { DateGeneratorFunction } from './date/interfaces'
import { MinuteGeneratorFunction } from './minute/interfaces'
import { MonthGeneratorFunction, MonthOptions } from './month/interfaces'
import { SecondGeneratorFunction } from './second/interfaces'

export interface TimeOptions {
  seed?: number
}

export interface TimeGeneratorFunction {
  /**
   * provides time based randomness.
   *
   * @param { TimeOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * time()
   */
  (options?: TimeOptions): string
}

export interface ITime {
  ampm: TimeGeneratorFunction
  date: DateGeneratorFunction
  hour: TimeGeneratorFunction
  second: SecondGeneratorFunction
  minute: MinuteGeneratorFunction
  millisecond: TimeGeneratorFunction
  month: MonthGeneratorFunction
  timestamp: TimeGeneratorFunction
  timezone: TimeGeneratorFunction
  weekday: TimeGeneratorFunction
  year: TimeGeneratorFunction
}
