import { Finance } from '../generator'
import { DollarGeneratorFunction } from './interfaces'
import { DollarOptions } from './interfaces'

export const dollar: DollarGeneratorFunction = (options?: DollarOptions) => {
  const finance = new Finance({ seed: options?.seed })
  return finance.dollar(options)
}
