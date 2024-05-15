import { FinanceOptions } from '../interfaces'

export interface CcOptions extends FinanceOptions {
  type?: string
}

export interface CcGeneratorFunction {
  /**
   * Returns a random cc.
   *
   * @param { CcOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * cc()
   */
  (options?: CcOptions): string
}
