import { PersonOptions } from '../interfaces'

export interface BirthdayOptions extends PersonOptions {
  minAge?: number
  maxAge?: number
  type?: 'child' | 'teen' | 'adult' | 'senior' | 'all'
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

export type BirthdayReturnType<O extends BirthdayOptions> =
  O['string'] extends true ? string : Date

export type BirthdayGeneratorFunction = <O extends BirthdayOptions>(
  /**
   * Returns a random birthday.
   *
   * @param { BirthdayOptions} [options={}]
   * @return { Date | string }
   * @example
   * // returns Date
   * birthday()
   */
  options?: O
) => BirthdayReturnType<O>
