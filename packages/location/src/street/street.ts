import { Location } from '../generator'
import { StreetGeneratorFunction } from './interfaces'
import { StreetOptions } from './interfaces'

export const street: StreetGeneratorFunction = (options?: StreetOptions) => {
  const location = new Location({ seed: options?.seed })
  return location.street(options)
}
