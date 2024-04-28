import { Person } from '../generator'
import { GenderGeneratorFunction } from './interfaces'
import { GenderOptions } from './interfaces'

export const gender: GenderGeneratorFunction = (options?: GenderOptions) => {
  const person = new Person({ seed: options?.seed })
  return person.gender(options)
}
