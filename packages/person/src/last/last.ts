import { Person } from '../generator'
import { LastGeneratorFunction } from './interfaces'
import { LastOptions } from './interfaces'

// Remember breaking change here got rid of nationality: '*' and defaulted to this
export const last: LastGeneratorFunction = (options?: LastOptions) => {
  const person = new Person({ seed: options?.seed })
  return person.last(options)
}
