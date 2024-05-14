import { Location } from '../generator'
import { PostcodeGeneratorFunction } from './interfaces'
import { PostcodeOptions } from './interfaces'

export const postcode: PostcodeGeneratorFunction = (
  options?: PostcodeOptions
) => {
  const location = new Location({ seed: options?.seed })
  return location.postcode(options)
}
