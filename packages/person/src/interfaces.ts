import { AgeGeneratorFunction } from './age/interfaces'
import { FirstGeneratorFunction } from './first/interfaces'
import { GenderGeneratorFunction } from './gender/interfaces'
import { LastGeneratorFunction } from './last/interfaces'
import { PrefixGeneratorFunction } from './prefix/interfaces'
import { SuffixGeneratorFunction } from './suffix/interfaces'

export interface PersonOptions {
  seed?: number
}

export interface PersonGeneratorFunction {
  /**
   * Return a random Person.
   *
   * @param { PersonOptions} [options={}]
   * @return { IPerson }
   * @example
   * // returns IPerson
   * person()
   */
  (options?: PersonOptions): string
}

export interface IPerson {
  age: AgeGeneratorFunction
  birthday: PersonGeneratorFunction
  cf: PersonGeneratorFunction
  cpf: PersonGeneratorFunction
  first: FirstGeneratorFunction
  gender: GenderGeneratorFunction
  last: LastGeneratorFunction
  name: PersonGeneratorFunction
  prefix: PrefixGeneratorFunction
  ssn: PersonGeneratorFunction
  suffix: SuffixGeneratorFunction
}
