import { MobileOptions } from '../interfaces'

export interface Wp7AnidOptions extends MobileOptions {}

export interface Wp7AnidGeneratorFunction {
  /**
   * Return a random Windows Phone 7 ANID.
   *
   * @param { Wp7AnidOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * wp7_anid()
   */
  (): string
}
