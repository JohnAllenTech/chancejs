import { Generator, GeneratorOptions } from '@chancejs/generator'
import { PersonOptions, IPerson } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'
import { Picker } from '@chancejs/pick'

import { AgeOptions } from './age/interfaces'
import { ageRanges } from './age/constants'
import { Gender, GenderOptions } from './gender/interfaces'
import { PrefixOptions } from './prefix/interfaces'
import { allPrefixes, femalePrefixes, malePrefixes } from './prefix/constants'
import { SuffixOptions } from './suffix/interfaces'
import { suffixes } from './suffix/constants'
import { FirstOptions } from './first/interfaces'
import { firstNames } from './first/constants'
import { LastOptions } from './last/interfaces'
import { lastNames } from './last/constants'

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
  public first(options?: FirstOptions): string {
    return this.picker.pickOne(
      firstNames[
        options?.gender ??
          (this.gender().toLowerCase() as keyof typeof firstNames)
      ][options?.nationality ?? 'en']
    )
  }
  public gender(options?: GenderOptions): string {
    return this.picker.pickOne(
      ['Male', 'Female'].concat(options?.extraGenders ?? [])
    )
  }
  public last(options?: LastOptions): string {
    return this.picker.pickOne(
      options?.nationality
        ? lastNames[options.nationality]
        : Object.values(lastNames).flat()
    )
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
  public suffix(options?: SuffixOptions): string {
    return options?.full
      ? this.picker.pickOne(suffixes).name
      : this.picker.pickOne(suffixes).abbreviation
  }
}
