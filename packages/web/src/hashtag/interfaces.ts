import { WebOptions } from '../interfaces'

export interface HashtagOptions extends WebOptions {}

export interface HashtagGeneratorFunction {
  /**
   * returns a random hashtag.
   *
   * @param { HashtagOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * hashtag()
   */
  (): string
}
