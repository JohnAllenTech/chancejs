import { AmpmGeneratorFunction } from './ampm/interfaces'
import { DateGeneratorFunction } from './date/interfaces'
import { HammertimeGeneratorFunction } from './hammertime/interfaces'
import { HourGeneratorFunction } from './hour/interfaces'
import { MillisecondGeneratorFunction } from './millisecond/interfaces'
import { MinuteGeneratorFunction } from './minute/interfaces'
import { MonthGeneratorFunction } from './month/interfaces'
import { SecondGeneratorFunction } from './second/interfaces'
import { TimestampGeneratorFunction } from './timestamp/interfaces'
import { TimezoneGeneratorFunction } from './timezone/interfaces'
import { WeekdayGeneratorFunction } from './weekday/interfaces'
import { YearGeneratorFunction } from './year/interfaces'

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
  ampm: AmpmGeneratorFunction
  date: DateGeneratorFunction
  hour: HourGeneratorFunction
  hammertime: HammertimeGeneratorFunction
  second: SecondGeneratorFunction
  minute: MinuteGeneratorFunction
  millisecond: MillisecondGeneratorFunction
  month: MonthGeneratorFunction
  timestamp: TimestampGeneratorFunction
  timezone: TimezoneGeneratorFunction
  weekday: WeekdayGeneratorFunction
  year: YearGeneratorFunction
}
