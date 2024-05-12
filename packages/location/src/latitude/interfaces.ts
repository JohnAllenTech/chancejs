import { LocationOptions } from '../interfaces'

export interface LatitudeOptions extends LocationOptions {
  min?: number
  max?: number
  fixed?: number
  format?: 'ddm' | 'dms' | 'dd'
}

export interface LatitudeGeneratorFunction {
  /**
   * Returns a random latitude.
   *
   * @param { LatitudeOptions} [options={}]
   * @return { number }
   * @example
   * // returns number
   * latitude()
   */
  (options?: LatitudeOptions): string | number
}
