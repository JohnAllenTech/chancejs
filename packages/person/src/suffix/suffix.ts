import { Person } from '../generator'
import { SuffixGeneratorFunction } from './interfaces'
import { SuffixOptions } from './interfaces'

export const suffix: SuffixGeneratorFunction = (options?: SuffixOptions) => {
  const person = new Person({ seed: options?.seed })
  return person.suffix(options)
}
