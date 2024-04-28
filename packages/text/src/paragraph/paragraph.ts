import { Text } from '../generator'
import { ParagraphGeneratorFunction, ParagraphOptions } from './interfaces'

export const paragraph: ParagraphGeneratorFunction = (
  options?: ParagraphOptions
) => {
  const text = new Text({ seed: options?.seed })
  return text.paragraph(options)
}
