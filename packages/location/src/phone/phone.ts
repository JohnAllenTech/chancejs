import { Location } from '../generator'
import { PhoneGeneratorFunction, PhoneOptions } from './interfaces'

export const phone: PhoneGeneratorFunction = (options?: PhoneOptions) => {
  const location = new Location({ seed: options?.seed })
  return location.phone(options)
}
