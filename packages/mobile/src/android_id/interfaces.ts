import { MobileOptions } from '../interfaces'

export interface AndroidIdOptions extends MobileOptions {}

export interface AndroidIdGeneratorFunction {
  /**
   * Return a random GCM registration ID.
   *
   * @param { AndroidIdOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * android_id()
   */
  (options?: AndroidIdOptions): string
}
