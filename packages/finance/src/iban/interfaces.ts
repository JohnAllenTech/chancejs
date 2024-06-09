import { FinanceOptions } from '../interfaces'

export interface IbanOptions extends FinanceOptions {}

export interface IbanGeneratorFunction {
  /**
   * returns a random iban which conforms to IBAN pattern.
   *
   * @param { IbanOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * iban()
   */
  (options?: IbanOptions): string
}
