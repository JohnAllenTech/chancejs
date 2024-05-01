import { Person } from '../generator'
import { BirthdayGeneratorFunction } from './interfaces'
import { BirthdayOptions } from './interfaces'

export const birthday: BirthdayGeneratorFunction = (
  options?: BirthdayOptions
) => {
  const person = new Person({ seed: options?.seed })
  return person.birthday(options)
}
