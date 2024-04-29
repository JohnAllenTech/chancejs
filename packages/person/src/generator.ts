import { Generator, GeneratorOptions } from '@chancejs/generator'
import { PersonOptions, IPerson } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'
import { Picker } from '@chancejs/pick'

import { AgeOptions } from './age/interfaces'
import { ageRanges } from './age/constants'
import { GenderOptions } from './gender/interfaces'
import { PrefixOptions } from './prefix/interfaces'
import { allPrefixes, femalePrefixes, malePrefixes } from './prefix/constants'

export class Person extends Generator implements IPerson {
  private naturalGenerator: NaturalGenerator
  private picker: Picker

  constructor(options: GeneratorOptions) {
    super(options)
    this.naturalGenerator = new NaturalGenerator(options)
    this.picker = new Picker(options)
  }

  public age(options?: AgeOptions): number {
    let ageRange = {
      min: ageRanges.ADULT_AGE_MIN,
      max: ageRanges.ADULT_AGE_MAX,
    }
    switch (options?.type) {
      case 'child':
        ageRange = {
          min: ageRanges.CHILD_AGE_MIN,
          max: ageRanges.CHILD_AGE_MAX,
        }
        break
      case 'teen':
        ageRange = {
          min: ageRanges.TEEN_AGE_MIN,
          max: ageRanges.TEEN_AGE_MAX,
        }
        break
      case 'adult':
        ageRange = {
          min: ageRanges.ADULT_AGE_MIN,
          max: ageRanges.ADULT_AGE_MAX,
        }
        break
      case 'senior':
        ageRange = {
          min: ageRanges.SENIOR_AGE_MIN,
          max: ageRanges.SENIOR_AGE_MAX,
        }
        break
      case 'all':
        ageRange = {
          min: ageRanges.AGE_MIN,
          max: ageRanges.AGE_MAX,
        }
        break
      default:
        break
    }
    return this.naturalGenerator.natural({ ...ageRange })
  }
  public birthday(options?: PersonOptions): string {
    return 'string'
  }
  public cf(options?: PersonOptions): string {
    return 'string'
  }
  public cpf(options?: PersonOptions): string {
    return 'string'
  }
  public first(options?: PersonOptions): string {
    return 'string'
  }
  public gender(options?: GenderOptions): string {
    return this.picker.pickOne(
      ['Male', 'Female'].concat(options?.extraGenders ?? [])
    )
  }
  public last(options?: PersonOptions): string {
    return 'string'
  }
  public name(options?: PersonOptions): string {
    return 'string'
  }
  public prefix(options?: PrefixOptions): string {
    const prefix = options?.gender
      ? this.picker.pickOne(
          options.gender === 'male' ? malePrefixes : femalePrefixes
        )
      : this.picker.pickOne(allPrefixes)

    return options?.full ? prefix.name : prefix.abbreviation
  }
  public ssn(options?: PersonOptions): string {
    return 'string'
  }
  public suffix(options?: PersonOptions): string {
    return 'string'
  }
}
