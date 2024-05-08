import { Location } from '../generator'
import { ZipGeneratorFunction } from './interfaces'
import { ZipOptions } from './interfaces'

export const zip: ZipGeneratorFunction = (options?: ZipOptions) => {
  const location = new Location({ seed: options?.seed })
  return location.zip(options)
}
