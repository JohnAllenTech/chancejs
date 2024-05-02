import { TimeOptions } from '../interfaces'
import { months } from './constants'

export interface MonthOptions extends TimeOptions {
  min?: number
  max?: number
  raw?: boolean
}

export interface RawMonth {
  name: string
  short_name: string
  numeric: string
  days: number
}

export type MonthReturnType<O extends MonthOptions> = O['raw'] extends true
  ? RawMonth
  : string

export type MonthGeneratorFunction = <O extends MonthOptions>(
  /**
   * Returns a random month.
   *
   * @param { MonthOptions} [options={}]
   * @return { MonthReturnType<O> }
   * @example
   * // returns a string | RawMonth
   * month()
   */
  options?: O
) => MonthReturnType<O>
