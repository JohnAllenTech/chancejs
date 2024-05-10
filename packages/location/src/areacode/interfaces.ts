import { LocationOptions } from '../interfaces'

export interface AreacodeOptions extends LocationOptions {
  parens?: boolean
  exampleNumber?: boolean
}

export interface AreacodeGeneratorFunction {
  /**
   * Returns a random areacode.
   *
   * @param { AreacodeOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * areacode()
   */
  (options?: AreacodeOptions): string
}
