import { Location } from '../generator'
import { CoordinatesGeneratorFunction } from './interfaces'
import { CoordinatesOptions } from './interfaces'

export const coordinates: CoordinatesGeneratorFunction = (
  options?: CoordinatesOptions
) => {
  const location = new Location({ seed: options?.seed })
  return location.coordinates(options)
}
