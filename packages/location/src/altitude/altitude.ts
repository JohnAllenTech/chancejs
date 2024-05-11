import { Location } from '../generator'
import { AltitudeGeneratorFunction } from './interfaces'
import { AltitudeOptions } from './interfaces'

export const altitude: AltitudeGeneratorFunction = (
  options?: AltitudeOptions
) => {
  const location = new Location({ seed: options?.seed })
  return location.altitude(options)
}
