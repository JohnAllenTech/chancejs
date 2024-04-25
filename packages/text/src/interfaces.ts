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
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { string }
   * @example
   * // returns string
   * text()
   */
  (options?: TextOptions, seed?: number): string
}

export interface IText {
  word: TextGeneratorFunction
  syllable: TextGeneratorFunction
  sentence: TextGeneratorFunction
  paragraph: TextGeneratorFunction
}
