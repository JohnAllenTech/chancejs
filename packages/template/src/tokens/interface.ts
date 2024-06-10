import { CharacterGenerator } from '@johnallentech/character'

export interface IToken {
  substitute(generator: CharacterGenerator): string
}
