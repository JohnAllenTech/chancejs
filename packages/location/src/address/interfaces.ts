import { StreetOptions } from 'src/street/interfaces'

export interface AddressOptions extends StreetOptions {}

export interface AddressGeneratorFunction {
  /**
   * Generate a random street address
   *
   * @param { AddressOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * address()
   */
  (options?: AddressOptions): string
}
