import { TextOptions } from '../interfaces'

export interface ParagraphOptions extends TextOptions {
  sentences?: number
  linebreak?: boolean
}

export interface ParagraphGeneratorFunction {
  /**
   * Return a random paragraph.
   *
   * @param { ParagraphOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * text()
   */
  (options?: ParagraphOptions): string
}
