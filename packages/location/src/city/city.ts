import { Location } from '../generator'
import { CityGeneratorFunction } from './interfaces'
import { CityOptions } from './interfaces'

export const city: CityGeneratorFunction = (options?: CityOptions) => {
  const location = new Location({ seed: options?.seed })
  return location.city(options)
}
