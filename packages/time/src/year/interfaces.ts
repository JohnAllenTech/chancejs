import { TimeOptions } from '../interfaces'

export interface YearOptions extends TimeOptions {
  min?: number
  max?: number
}

export interface YearGeneratorFunction {
  /**
   * Returns a random year.
   *
   * @param { YearOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * year()
   */
  (options?: YearOptions): string
}
