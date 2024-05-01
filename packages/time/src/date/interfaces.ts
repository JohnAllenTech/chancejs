import { TimeOptions } from '../interfaces'

export interface DateOptions extends TimeOptions {
  sampleOption: string
}

export interface DateGeneratorFunction {
  /**
   * Returns a random date.
   *
   * @param { DateOptions} [options={}]
   * @return { number }
   * @example
   * // returns string | Date
   * date()
   */
  (options?: DateOptions): string | Date
}
