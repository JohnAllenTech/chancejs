import { Generator, GeneratorOptions } from '@chancejs/generator'
import { TextOptions, IText } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'
import { CharacterGenerator } from '@chancejs/character'

export class Text extends Generator implements IText {
  private naturalGenerator: NaturalGenerator
  private characterGenerator: CharacterGenerator

  constructor(options: GeneratorOptions) {
    super(options)
    this.naturalGenerator = new NaturalGenerator(options)
    this.characterGenerator = new CharacterGenerator(options)
  }
  public syllable(options?: TextOptions): string {
    const length =
        options?.length || this.naturalGenerator.natural({ min: 2, max: 3 }),
      consonants = 'bcdfghjklmnprstvwz', // consonants except hard to speak ones
      vowels = 'aeiou', // vowels
      all = consonants + vowels // all

    let text = ''
    let chr = ''

    // I'm sure there's a more elegant way to do this, but this works
    // decently well.
    for (let i = 0; i < length; i++) {
      if (i === 0) {
        // First character can be anything
        chr = this.characterGenerator.character({ pool: all })
      } else if (consonants.indexOf(chr) === -1) {
        // Last character was a vowel, now we want a consonant
        chr = this.characterGenerator.character({ pool: consonants })
      } else {
        // Last character was a consonant, now we want a vowel
        chr = this.characterGenerator.character({ pool: vowels })
      }
      text += chr
    }

    return options?.capitalize ? capitalize(text) : text
  }

  public word(options?: TextOptions): string {
    // Function body goes here.
    // You should have access to your pseudo-random number generator via `this.generator()`.
    return 'string'
  }

  public sentence(options?: TextOptions): string {
    // Function body goes here.
    // You should have access to your pseudo-random number generator via `this.generator()`.
    return 'string'
  }

  public paragraph(options?: TextOptions): string {
    // Function body goes here.
    // You should have access to your pseudo-random number generator via `this.generator()`.
    return 'string'
  }
}
function capitalize(text: string): string {
  return text[0].toUpperCase() + text.slice(1)
}
