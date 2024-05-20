import { WebOptions } from '../interfaces'

export interface EmailOptions extends WebOptions {
  length?: number
  domain?: string
}

export interface EmailGeneratorFunction {
  /**
   * returns a random email with a random domain.
   *
   * @param { EmailOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * email()
   */
  (options?: EmailOptions): string
}
