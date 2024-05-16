import { Mobile } from '../generator'
import { BbPinGeneratorFunction } from './interfaces'
import { BbPinOptions } from './interfaces'

export const bb_pin: BbPinGeneratorFunction = (options?: BbPinOptions) => {
  const mobile = new Mobile({ seed: options?.seed })
  return mobile.bb_pin(options)
}
