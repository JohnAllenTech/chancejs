import { Finance } from '../generator'
import { CurrencyGeneratorFunction } from './interfaces'
import { CurrencyOptions } from './interfaces'

export const currency: CurrencyGeneratorFunction = (
  options?: CurrencyOptions
) => {
  const finance = new Finance({ seed: options?.seed })
  return finance.currency(options)
}
