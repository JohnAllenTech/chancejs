import { WebOptions } from '../interfaces'

export interface Ipv6Options extends WebOptions {}

export interface Ipv6GeneratorFunction {
  /**
   * returns a random ipv6 address.
   *
   * @param { Ipv6Options} [options={}]
   * @return { string }
   * @example
   * // returns string
   * ipv6()
   */
  (options?: Ipv6Options): string
}
