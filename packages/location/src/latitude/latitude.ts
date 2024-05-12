import { Location } from '../generator'
import { LatitudeGeneratorFunction } from './interfaces'
import { LatitudeOptions } from './interfaces'

export const latitude: LatitudeGeneratorFunction = options => {
  const location = new Location({ seed: options?.seed })
  return location.latitude(options)
}
