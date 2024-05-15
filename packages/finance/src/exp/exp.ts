import { Finance } from '../generator'
import { ExpGeneratorFunction } from './interfaces'
import { ExpOptions } from './interfaces'

export const exp: ExpGeneratorFunction = options => {
  const finance = new Finance({ seed: options?.seed })
  return finance.exp(options)
}
