import { LocationOptions } from '../interfaces'
import { provinces } from './constants'

export interface ProvinceOptions extends LocationOptions {
  country?: keyof typeof provinces
  full?: boolean
}

export interface ProvinceGeneratorFunction {
  /**
   * Returns a random province.
   *
   * @param { ProvinceOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * province()
   */
  (options?: ProvinceOptions): string
}
