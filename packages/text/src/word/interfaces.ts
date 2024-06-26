import { TextOptions } from '../interfaces'

export interface WordOptions extends TextOptions {
  length?: number
  capitalize?: boolean
  syllables?: number
}

export interface WordGeneratorFunction {
  /**
   * Return a random string.
   *
   * @param { WordOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * text()
   */
  (options?: WordOptions): string
}
