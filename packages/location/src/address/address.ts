import { Location } from '../generator'
import { AddressGeneratorFunction } from './interfaces'
import { AddressOptions } from './interfaces'

export const address: AddressGeneratorFunction = (options?: AddressOptions) => {
  const location = new Location({ seed: options?.seed })
  return location.address(options)
}
