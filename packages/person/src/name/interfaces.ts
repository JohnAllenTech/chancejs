import { PersonOptions } from '../interfaces'

export interface NameOptions extends PersonOptions {
  prefix?: boolean
  suffix?: boolean
  middle?: boolean
  middle_initial?: boolean
}

export interface NameGeneratorFunction {
  /**
   * Returns a random full name.
   *
   * @param { NameOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * name()
   */
  (options?: NameOptions): string
}
