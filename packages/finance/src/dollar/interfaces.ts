import { FinanceOptions } from '../interfaces'

export interface DollarOptions extends FinanceOptions {
  min?: number
  max?: number
}

export interface DollarGeneratorFunction {
  /**
   * Returns a random dollar.
   *
   * @param { DollarOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * dollar()
   */
  (options?: DollarOptions): string
}
