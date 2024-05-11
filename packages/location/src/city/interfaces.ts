import { LocationOptions } from '../interfaces'

export interface CityOptions extends LocationOptions {
  sampleOption: string
}

export interface CityGeneratorFunction {
  /**
   * Returns a random city.
   *
   * @param { CityOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * city()
   */
  (options?: CityOptions): string
}
