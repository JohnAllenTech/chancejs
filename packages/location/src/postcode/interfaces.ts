import { LocationOptions } from '../interfaces'

export interface PostcodeOptions extends LocationOptions {}

export interface PostcodeGeneratorFunction {
  /**
   * Generate a random (U.K.) postcode. Returned postcode is valid with respect to the Postcode Area (first characters) and format only.
   *
   * @param { PostcodeOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * postcode()
   */
  (options?: PostcodeOptions): string
}
