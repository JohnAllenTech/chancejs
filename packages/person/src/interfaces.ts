import { AgeGeneratorFunction } from './age/interfaces'

export interface PersonOptions {
  seed?: number
  length?: number
  capitalize?: boolean
}

export interface PersonGeneratorFunction {
  /**
   * Return a random Person.
   *
   * @param { PersonOptions} [options={}]
   * @return { IPerson }
   * @example
   * // returns string
   * person()
   */
  (options?: PersonOptions): string
}

export interface IPerson {
  age: AgeGeneratorFunction
  birthday: PersonGeneratorFunction
  cf: PersonGeneratorFunction
  cpf: PersonGeneratorFunction
  first: PersonGeneratorFunction
  gender: PersonGeneratorFunction
  last: PersonGeneratorFunction
  name: PersonGeneratorFunction
  prefix: PersonGeneratorFunction
  ssn: PersonGeneratorFunction
  suffix: PersonGeneratorFunction
}
