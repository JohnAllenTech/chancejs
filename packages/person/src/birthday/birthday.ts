import { Person } from '../generator'
import { BirthdayGeneratorFunction } from './interfaces'

export const birthday: BirthdayGeneratorFunction = options => {
  const person = new Person({ seed: options?.seed })
  return person.birthday(options)
}
