import { WebOptions } from '../interfaces'

export interface GoogleAnalyticsOptions extends WebOptions {}

export interface GoogleAnalyticsGeneratorFunction {
  /**
   * returns a random google analytics tracking code.
   *
   * @param { GoogleAnalyticsOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * google_analytics()
   */
  (options?: GoogleAnalyticsOptions): string
}
