import { WebOptions } from '../interfaces'

export interface UrlOptions extends WebOptions {
  protocol?: string
  domain?: string
  domain_prefix?: string
  path?: string
  extensions?: Array<string>
}

export interface UrlGeneratorFunction {
  /**
   * returns a random url.
   *
   * @param { UrlOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * url()
   */
  (options?: UrlOptions): string
}
