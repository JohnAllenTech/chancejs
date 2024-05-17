import { WebOptions } from '../interfaces'

export interface PortOptions extends WebOptions {}

export interface PortGeneratorFunction {
  /**
   * returns a random port number.
   *
   * @param { PortOptions} [options={}]
   * @return { number }
   * @example
   * // returns number
   * port()
   */
  (options?: PortOptions): number
}
