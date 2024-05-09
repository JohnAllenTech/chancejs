import { countiesObject } from './constants'
import { LocationOptions } from '../interfaces'

export interface CountiesOptions extends LocationOptions {
  country: keyof typeof countiesObject
}

export interface CountiesGeneratorFunction {
  /**
   * Returns a random counties.
   *
   * @param { CountiesOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * counties()
   */
  (options?: CountiesOptions): string
}
