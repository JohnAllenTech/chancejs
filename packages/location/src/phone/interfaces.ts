import { LocationOptions } from '../interfaces'

export interface PhoneOptions extends LocationOptions {
  exampleNumber?: boolean
  parens?: boolean
  formatted?: boolean
  mobile?: boolean
  country?: 'us' | 'uk' | 'fr' | 'za' | 'br'
}

export interface PhoneGeneratorFunction {
  /**
   * Returns a random phone.
   *
   * @param { PhoneOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * phone()
   */
  (options?: PhoneOptions): string
}
