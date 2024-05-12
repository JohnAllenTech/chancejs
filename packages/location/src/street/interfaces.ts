import { LocationOptions } from '../interfaces'
import { street_suffixes } from './constants'

export type StreetSuffix = { name: string; abbreviation: string }

export interface StreetOptions extends LocationOptions {
  country?: keyof typeof street_suffixes
  syllables?: number
  short_suffix?: boolean
}

export interface StreetGeneratorFunction {
  /**
   * Returns a random street.
   *
   * @param { StreetOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * street()
   */
  (options?: StreetOptions): string
}
