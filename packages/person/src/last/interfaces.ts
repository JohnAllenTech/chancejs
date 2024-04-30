import { PersonOptions } from '../interfaces'
import { lastNames } from './constants'

export interface LastOptions extends PersonOptions {
  nationality?: keyof typeof lastNames
}

export interface LastGeneratorFunction {
  /**
   * Returns a random last name.
   *
   * @param { LastOptions} [options={}]
   * @return { number }
   * @example
   * // returns string
   * last()
   */
  (options?: LastOptions): string
}
