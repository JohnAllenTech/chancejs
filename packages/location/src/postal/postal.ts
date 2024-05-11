import { Location } from '../generator'
import { PostalGeneratorFunction } from './interfaces'
import { PostalOptions } from './interfaces'

export const postal: PostalGeneratorFunction = (options?: PostalOptions) => {
  const location = new Location({ seed: options?.seed })
  return location.postal(options)
}
