import { LocationOptions } from '../interfaces'

export interface LatitudeOptions extends LocationOptions {
  min?: number
  max?: number
  fixed?: number
  format?: 'ddm' | 'dms' | 'dd'
}

export type LatitudeReturnType<O extends LatitudeOptions> =
  O['format'] extends 'dd' ? number : string

export type LatitudeGeneratorFunction = <O extends LatitudeOptions>(
  /**
   * Returns a random latitude.
   *
   * @param { LatitudeOptions} [options={}]
   * @return { LatitudeReturnType<O> }
   * @example
   * // returns number
   * latitude()
   */
  options?: O
) => LatitudeReturnType<O>
