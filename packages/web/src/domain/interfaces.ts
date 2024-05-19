import { Tld } from 'src/tld'
import { WebOptions } from '../interfaces'

export interface DomainOptions extends WebOptions {
  tld: Tld
}

export interface DomainGeneratorFunction {
  /**
   * returns a random domain ie. google.com.
   *
   * @param { DomainOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * domain()
   */
  (options?: DomainOptions): string
}
