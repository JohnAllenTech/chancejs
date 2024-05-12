import { LocationOptions } from '../interfaces'

export interface GeohashOptions extends LocationOptions {
  length?: number
}

export interface GeohashGeneratorFunction {
  /**
   * Returns a random geohash.
   *
   * @param { GeohashOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * geohash()
   */
  (options?: GeohashOptions): string
}
