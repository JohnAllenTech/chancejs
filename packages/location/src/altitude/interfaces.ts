import { LocationOptions } from '../interfaces'

export interface AltitudeOptions extends LocationOptions {
  fixed?: number
  min?: number
  max?: number
}

export interface AltitudeGeneratorFunction {
  /**
   * Returns a random altitude.
   *
   * @param { AltitudeOptions} [options={}]
   * @return { number }
   * @example
   * // returns number
   * altitude()
   */
  (options?: AltitudeOptions): number
}
