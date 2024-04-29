import { PersonOptions } from '../interfaces'

export interface PrefixOptions extends PersonOptions {
  full?: boolean
  gender?: 'male' | 'female' | 'all'
}

export interface PrefixGeneratorFunction {
  /**
   * Returns a random prefix.
   *
   * @param { PrefixOptions} [options={}]
   * @return { number }
   * @example
   * // returns string
   * prefix()
   */
  (options?: PrefixOptions): string
}
