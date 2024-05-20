import { WebOptions } from '../interfaces'

export interface IpOptions extends WebOptions {}

export interface IpGeneratorFunction {
  /**
   * Returns a random IP Address.
   *
   * @param { IpOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * ip()
   */
  (options?: IpOptions): string
}
