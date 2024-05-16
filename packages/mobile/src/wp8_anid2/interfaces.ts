import { MobileOptions } from '../interfaces'

export interface Wp8Anid2Options extends MobileOptions {}

export interface Wp8Anid2GeneratorFunction {
  /**
   * wp8_anid2.
   *
   * @param { Wp8Anid2Options} [options={}]
   * @return { string }
   * @example
   * // returns string
   * wp8_anid2()
   */
  (): string
}
