import { AndroidIdGeneratorFunction } from './android_id'

export interface MobileOptions {
  seed?: number
}

export interface MobileGeneratorFunction {
  /**
   * returns mobile/cell phone related randomness.
   *
   * @param { MobileOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * mobile()
   */
  (options?: MobileOptions): string
}

export interface IMobile {
  android_id: AndroidIdGeneratorFunction
  apple_token: MobileGeneratorFunction
  bb_pin: MobileGeneratorFunction
  wp7_anid: MobileGeneratorFunction
  wp8_anid2: MobileGeneratorFunction
}
