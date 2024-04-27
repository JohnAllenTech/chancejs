import { WordGeneratorFunction } from './word/interfaces'

export interface TextOptions {
  seed?: number
  length?: number
  capitalize?: boolean
}

export interface TextGeneratorFunction {
  /**
   * Return a random string.
   *
   * @param { TextOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * text()
   */
  (options?: TextOptions): string
}

export interface IText {
  word: WordGeneratorFunction
  syllable: TextGeneratorFunction
  sentence: TextGeneratorFunction
  paragraph: TextGeneratorFunction
}
