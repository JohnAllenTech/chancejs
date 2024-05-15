import { FinanceOptions } from '../interfaces'

export interface EuroOptions extends FinanceOptions {
  min?: number
  max?: number
}

export interface EuroGeneratorFunction {
  /**
   * Returns a random euro.
   *
   * @param { EuroOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * euro()
   */
  (options?: EuroOptions): string
}
