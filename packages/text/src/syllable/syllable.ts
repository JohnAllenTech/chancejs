import { Text } from '../generator'
import { TextGeneratorFunction, TextOptions } from '../interfaces'

export const syllable: TextGeneratorFunction = (options?: TextOptions) => {
  const text = new Text({ seed: options?.seed })
  return text.syllable(options)
}
