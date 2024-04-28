import { TextOptions } from '../interfaces'

export interface SyllableOptions extends TextOptions {
  length?: number
  capitalize?: boolean
}

export interface SyllableGeneratorFunction {
  /**
   * Return a random string.
   *
   * @param { SyllableOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * text()
   */
  (options?: SyllableOptions): string
}
