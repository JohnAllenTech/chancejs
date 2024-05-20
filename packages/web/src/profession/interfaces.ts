import { WebOptions } from '../interfaces'

export interface ProfessionOptions extends WebOptions {
  rank?: boolean
}

export interface ProfessionGeneratorFunction {
  /**
   * Return a random profession.
   *
   * @param { ProfessionOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * profession()
   */
  (options?: ProfessionOptions): string
}
