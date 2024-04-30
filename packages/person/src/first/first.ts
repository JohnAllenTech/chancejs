import { Person } from '../generator'
import { FirstGeneratorFunction } from './interfaces'
import { FirstOptions } from './interfaces'

export const first: FirstGeneratorFunction = (options?: FirstOptions) => {
  const person = new Person({ seed: options?.seed })
  return person.first(options)
}
