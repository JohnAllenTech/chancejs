import { Gender } from 'src/gender/interfaces'
import { PersonOptions } from '../interfaces'
import { firstNames } from './constants'

export interface FirstOptions extends PersonOptions {
  gender?: keyof typeof firstNames
  nationality?: keyof typeof firstNames.male | keyof typeof firstNames.female
}

export interface FirstGeneratorFunction {
  /**
   * Returns a random first name.
   *
   * @param { FirstOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * first()
   */
  (options?: FirstOptions): string
}
