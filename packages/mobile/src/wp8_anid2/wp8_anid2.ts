import { Mobile } from '../generator'
import { Wp8Anid2GeneratorFunction } from './interfaces'
import { Wp8Anid2Options } from './interfaces'

export const wp8_anid2: Wp8Anid2GeneratorFunction = (
  options?: Wp8Anid2Options
) => {
  const mobile = new Mobile({ seed: options?.seed })
  return mobile.wp8_anid2()
}
