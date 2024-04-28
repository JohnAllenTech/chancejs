import { PersonOptions } from '../interfaces'

export interface AgeOptions extends PersonOptions {
  type?: 'child' | 'teen' | 'adult' | 'senior' | 'all'
}

export interface AgeGeneratorFunction {
  /**
   * Return a random age.
   *
   * @param { AgeOptions} [options={}]
   * @return { number }
   * @example
   * // returns string
   * age()
   */
  (options?: AgeOptions): number
}
