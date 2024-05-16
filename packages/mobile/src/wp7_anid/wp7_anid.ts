import { Mobile } from '../generator'
import { Wp7AnidGeneratorFunction } from './interfaces'
import { Wp7AnidOptions } from './interfaces'

export const wp7_anid: Wp7AnidGeneratorFunction = (
  options?: Wp7AnidOptions
) => {
  const mobile = new Mobile({ seed: options?.seed })
  return mobile.wp7_anid()
}
