import { Location } from '../generator'
import { CountryGeneratorFunction } from './interfaces'
import { CountryOptions } from './interfaces'

export const country: CountryGeneratorFunction = options => {
  const location = new Location({ seed: options?.seed })
  return location.country(options)
}
