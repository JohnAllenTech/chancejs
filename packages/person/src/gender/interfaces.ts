import { PersonOptions } from '../interfaces'

export interface GenderOptions extends PersonOptions {
  extraGenders?: Array<string>
}

export type Gender = 'male' | 'Female'

export interface GenderGeneratorFunction {
  /**
   * Returns a random gender.
   *
   * @param { GenderOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * gender()
   */
  (options?: GenderOptions): string
}
