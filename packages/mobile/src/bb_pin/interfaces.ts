import { MobileOptions } from '../interfaces'

export interface BbPinOptions extends MobileOptions {}

export interface BbPinGeneratorFunction {
  /**
   * Return a random BlackBerry Device PIN
   *
   * @param { BbPinOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * bb_pin()
   */
  (options?: BbPinOptions): string
}
