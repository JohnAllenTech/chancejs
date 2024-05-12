import { LocationOptions } from '../interfaces'

export interface LongitudeOptions extends LocationOptions {
  min?: number
  max?: number
  fixed?: number
  format?: 'ddm' | 'dms' | 'dd'
}

export type LongitudeReturnType<O extends LongitudeOptions> =
  O['format'] extends 'dd' ? number : string

export type LongitudeGeneratorFunction = <O extends LongitudeOptions>(
  /**
   * Returns a random longitude.
   *
   * @param { LongitudeOptions} [options={}]
   * @return { LongitudeReturnType<O> }
   * @example
   * // returns string | number
   * longitude()
   */
  options?: O
) => LongitudeReturnType<O>
