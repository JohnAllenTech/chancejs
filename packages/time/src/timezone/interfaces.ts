import { TimeOptions } from '../interfaces'

export interface TimezoneOptions extends TimeOptions {}

export type Timezone = {
  name: string
  abbr: string
  offset: number
  isdst: boolean
  text: string
  utc: string[]
}

export interface TimezoneGeneratorFunction {
  /**
   * Returns a random timezone.
   *
   * @param { TimezoneOptions} [options={}]
   * @return { Timezone }
   * @example
   * // returns Timezone
   * timezone()
   */
  (options?: TimezoneOptions): Timezone
}
