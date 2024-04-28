import { TextOptions } from '../interfaces'

export interface SentenceOptions extends TextOptions {
  words?: number
  punctuation?: string
}

export interface SentenceGeneratorFunction {
  /**
   * Return a random sentence.
   *
   * @param { SentenceOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * text()
   */
  (options?: SentenceOptions): string
}
