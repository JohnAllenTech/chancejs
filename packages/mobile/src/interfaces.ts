import { AndroidIdGeneratorFunction } from './android_id'
import { AppleTokenGeneratorFunction } from './apple_token'
import { BbPinGeneratorFunction } from './bb_pin'
import { Wp7AnidGeneratorFunction } from './wp7_anid'
import { Wp8Anid2GeneratorFunction } from './wp8_anid2'

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
  apple_token: AppleTokenGeneratorFunction
  bb_pin: BbPinGeneratorFunction
  wp7_anid: Wp7AnidGeneratorFunction
  wp8_anid2: Wp8Anid2GeneratorFunction
}
