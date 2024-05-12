import { LocationOptions } from '../interfaces'

export interface CoordinatesOptions extends LocationOptions {
  min?: number
  max?: number
  fixed?: number
  format?: 'ddm' | 'dms' | 'dd'
}

export interface CoordinatesGeneratorFunction {
  /**
   * Returns a random coordinates.
   *
   * @param { CoordinatesOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * coordinates()
   */
  (options?: CoordinatesOptions): string
}
