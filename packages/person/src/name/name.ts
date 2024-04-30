import { Person } from '../generator'
import { NameGeneratorFunction } from './interfaces'
import { NameOptions } from './interfaces'

export const name: NameGeneratorFunction = (options?: NameOptions) => {
  const person = new Person({ seed: options?.seed })
  return person.name(options)
}
