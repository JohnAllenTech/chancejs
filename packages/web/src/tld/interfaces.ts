import { WebOptions } from '../interfaces'
import { const_tlds } from './constants'

export interface TldOptions extends WebOptions {}

export type Tld = (typeof const_tlds)[number]

export interface TldGeneratorFunction {
  /**
   * returns a random top level domain.
   *
   * @param { TldOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * tld()
   */
  (options?: TldOptions): string
}
