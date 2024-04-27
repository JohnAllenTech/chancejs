import { Text } from '../generator'
import { WordGeneratorFunction, WordOptions } from './interfaces'

export const word: WordGeneratorFunction = (options?: WordOptions) => {
  const text = new Text({ seed: options?.seed })
  return text.word(options)
}
