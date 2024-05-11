import { LocationOptions } from '../interfaces'

export interface DepthOptions extends LocationOptions {
  fixed?: number
  min?: number
  max?: number
}

export interface DepthGeneratorFunction {
  /**
   * Returns a random depth.
   *
   * @param { DepthOptions} [options={}]
   * @return { number }
   * @example
   * // returns number
   * depth()
   */
  (options?: DepthOptions): number
}
