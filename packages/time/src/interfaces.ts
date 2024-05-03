import { DateGeneratorFunction } from './date/interfaces'
import { HourGeneratorFunction } from './hour/interfaces'
import { MillisecondGeneratorFunction } from './millisecond/interfaces'
import { MinuteGeneratorFunction } from './minute/interfaces'
import { MonthGeneratorFunction, MonthOptions } from './month/interfaces'
import { SecondGeneratorFunction } from './second/interfaces'
import { TimestampGeneratorFunction } from './timestamp/interfaces'
import { WeekdayGeneratorFunction } from './weekday/interfaces'

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
  hour: HourGeneratorFunction
  second: SecondGeneratorFunction
  minute: MinuteGeneratorFunction
  millisecond: MillisecondGeneratorFunction
  month: MonthGeneratorFunction
  timestamp: TimestampGeneratorFunction
  timezone: TimeGeneratorFunction
  weekday: WeekdayGeneratorFunction
  year: TimeGeneratorFunction
}
