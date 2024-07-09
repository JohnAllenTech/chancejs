import {
  Generator,
  GeneratorOptions,
  validateNumber,
  validateRange,
  times,
} from '@johnallentech/generator'
import { NaturalGenerator } from '@johnallentech/natural'
import { CharacterGenerator } from '@johnallentech/character'
import { StringOptions, IStringGenerator } from './interfaces'

export class StringGenerator extends Generator implements IStringGenerator {
  private naturalGenerator: NaturalGenerator
  private characterGenerator: CharacterGenerator
  constructor(options: GeneratorOptions) {
    super(options)
    this.naturalGenerator = new NaturalGenerator(options)
    this.characterGenerator = new CharacterGenerator(options)
  }

  public string(options?: StringOptions): string {
    const { min, max } = validateRange(
      { min: 5, max: 20, ...options },
      { min: 1 }
    )
    validateNumber(min, { isInteger: true })
    validateNumber(max, { isInteger: true })
    if (options?.length === 0) {
      throw new RangeError('Chance: Length must be a positive integer.')
    }
    if (options?.length) {
      validateNumber(options.length, { isInteger: true, range: { min: 1 } })
    }

    const length =
      options?.length || this.naturalGenerator.natural({ min, max })

    const chars = times(length, () =>
      this.characterGenerator.character(options)
    )

    return chars.join('')
  }
}
