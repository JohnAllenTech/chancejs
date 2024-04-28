import { Generator, GeneratorOptions } from '@chancejs/generator'
import { TextOptions, IText } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'
import { CharacterGenerator } from '@chancejs/character'
import { WordOptions } from './word/interfaces'
import { SentenceOptions } from './sentence/interfaces'

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

  public word(options?: WordOptions): string {
    //todo fix this using typescript so length and symbols cant be both given

    if (options?.length && options.syllables)
      throw new Error('Chance: Cannot specify both syllables AND length.')

    const syllables =
      options?.syllables || this.naturalGenerator.natural({ min: 1, max: 3 })

    let text = ''

    if (options?.length) {
      // Either bound word by length
      do {
        text += this.syllable()
      } while (text.length < options.length)
      text = text.substring(0, options.length)
    } else {
      // Or by number of syllables
      for (let i = 0; i < syllables; i++) {
        text += this.syllable()
      }
    }

    if (options?.capitalize) {
      text = capitalize(text)
    }

    return text
  }

  public sentence(options?: SentenceOptions): string {
    const words =
      options?.words || this.naturalGenerator.natural({ min: 12, max: 18 })
    const punctuation = options?.punctuation
    let text

    const word_array = Array.from({ length: words }, _ => this.word())

    text = word_array.join(' ')

    // Capitalize first letter of sentence
    text = capitalize(text)

    // Make sure punctuation has a usable value and add if '.' if not
    text += punctuation && /^[.?;!:]$/.test(punctuation) ? punctuation : '.'

    return text
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
