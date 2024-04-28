import { Person } from '../generator'
import { AgeGeneratorFunction } from './interfaces'
import { AgeOptions } from './interfaces'

export const age: AgeGeneratorFunction = (options?: AgeOptions) => {
  const person = new Person({ seed: options?.seed })
  return person.age(options)
}
