import { Text } from './generator'
import { TextGeneratorFunction } from './interfaces'

export const syllable: TextGeneratorFunction = (options, seed) => {
  const text = new Text({ seed })
  return text.syllable(options)
}
