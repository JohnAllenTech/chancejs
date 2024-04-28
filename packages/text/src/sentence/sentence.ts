import { Text } from '../generator'
import { SentenceGeneratorFunction, SentenceOptions } from './interfaces'

export const sentence: SentenceGeneratorFunction = (
  options?: SentenceOptions
) => {
  const text = new Text({ seed: options?.seed })
  return text.sentence(options)
}
