import { Location } from '../generator'
import { LongitudeGeneratorFunction } from './interfaces'

export const longitude: LongitudeGeneratorFunction = options => {
  const location = new Location({ seed: options?.seed })
  return location.longitude(options)
}
