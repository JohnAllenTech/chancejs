import { PersonOptions } from '../interfaces'

export interface BirthdayOptions extends PersonOptions {
  minAge?: number
  maxAge?: number
}

export interface BirthdayGeneratorFunction {
  /**
   * Returns a random birthday.
   *
   * @param { BirthdayOptions} [options={}]
   * @return { string | Date }
   * @example
   * // returns string | Date
   * birthday()
   */
  (options?: BirthdayOptions): string | Date
}
