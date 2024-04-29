import { Person } from '../generator'
import { PrefixGeneratorFunction } from './interfaces'
import { PrefixOptions } from './interfaces'

export const prefix: PrefixGeneratorFunction = (options?: PrefixOptions) => {
  const person = new Person({ seed: options?.seed })
  return person.prefix(options)
}
