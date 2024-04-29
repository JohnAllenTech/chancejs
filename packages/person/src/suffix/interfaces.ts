import { PersonOptions } from '../interfaces'

export interface SuffixOptions extends PersonOptions {
  full?: boolean
}

export interface SuffixGeneratorFunction {
  /**
   * Returns a random suffix.
   *
   * @param { SuffixOptions} [options={}]
   * @return { number }
   * @example
   * // returns string
   * suffix()
   */
  (options?: SuffixOptions): string
}
