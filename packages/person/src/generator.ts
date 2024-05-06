import { Generator, GeneratorOptions } from '@chancejs/generator'
import { PersonOptions, IPerson } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'
import { Picker } from '@chancejs/pick'
import { date } from '@chancejs/time'
import { AgeOptions } from './age/interfaces'
import { ageRanges } from './age/constants'
import { GenderOptions } from './gender/interfaces'
import { PrefixOptions } from './prefix/interfaces'
import { allPrefixes, femalePrefixes, malePrefixes } from './prefix/constants'
import { SuffixOptions } from './suffix/interfaces'
import { suffixes } from './suffix/constants'
import { FirstOptions } from './first/interfaces'
import { firstNames } from './first/constants'
import { LastOptions } from './last/interfaces'
import { lastNames } from './last/constants'
import { NameOptions } from './name/interfaces'
import { CharacterGenerator } from '@chancejs/character'
import { BirthdayOptions, BirthdayReturnType } from './birthday/interfaces'

export class Person extends Generator implements IPerson {
  private naturalGenerator: NaturalGenerator
  private picker: Picker
  private characterGenerator: CharacterGenerator

  constructor(options: GeneratorOptions) {
    super(options)
    this.naturalGenerator = new NaturalGenerator(options)
    this.characterGenerator = new CharacterGenerator(options)
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
  public birthday<O extends BirthdayOptions>(
    options?: O
  ): BirthdayReturnType<O> {
    const age = this.age({
      seed: options?.seed,
      type: options?.type,
    })
    const now = new Date()
    const currentYear = now.getFullYear()

    let min: Date | undefined
    let max: Date | undefined

    const minAge = options?.minAge ? options.minAge : 0
    const maxAge = options?.maxAge ? options.maxAge : 100

    if (options && options.type) {
      min = new Date(currentYear - age - 1, now.getMonth(), now.getDate())
      max = new Date(currentYear - age, now.getMonth(), now.getDate())
    } else if (
      options &&
      (options.minAge !== undefined || options.maxAge !== undefined)
    ) {
      testRange(minAge < 0, 'Chance: MinAge cannot be less than zero.')
      testRange(
        minAge > maxAge,
        'Chance: MinAge cannot be greater than MaxAge.'
      )

      min = new Date(currentYear - maxAge - 1, now.getMonth(), now.getDate())
      max = new Date(currentYear - minAge, now.getMonth(), now.getDate())

      min.setDate(min.getDate() + 1)
      max.setDate(max.getDate() + 1)
      max.setMilliseconds(max.getMilliseconds() - 1)
    } else {
      min = new Date(
        options?.year ?? currentYear - age,
        now.getMonth(),
        now.getDate()
      )
      max = new Date(
        options?.year ?? currentYear - age,
        now.getMonth(),
        now.getDate()
      )
    }

    return date({
      min,
      max,
      year: options?.year,
      string: options?.string,
    }) as BirthdayReturnType<O>
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
  public name(options?: NameOptions): string {
    const first = this.first(options)
    const last = this.last(options)
    let name

    if (options?.middle) {
      name = first + ' ' + this.first(options) + ' ' + last
    } else if (options?.middle_initial) {
      name =
        first +
        ' ' +
        this.characterGenerator.character({ alpha: true, casing: 'upper' }) +
        '. ' +
        last
    } else {
      name = first + ' ' + last
    }

    if (options?.prefix) {
      name = this.prefix(options) + ' ' + name
    }

    if (options?.suffix) {
      name = name + ' ' + this.suffix(options)
    }

    return name
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
function testRange(test: boolean, errorMessage: string | undefined) {
  if (test) {
    throw new RangeError(errorMessage)
  }
}
