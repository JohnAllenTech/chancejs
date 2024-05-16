import { MobileOptions } from '../interfaces'

export interface AppleTokenOptions extends MobileOptions {}

export interface AppleTokenGeneratorFunction {
  /**
   * Return a random Apple Push Token
   *
   * @param { AppleTokenOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * apple_token()
   */
  (options?: AppleTokenOptions): string
}
