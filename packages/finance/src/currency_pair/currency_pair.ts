import { Finance } from '../generator'
import { CurrencyPairGeneratorFunction } from './interfaces'
import { CurrencyPairOptions } from './interfaces'

export const currency_pair: CurrencyPairGeneratorFunction = (
  options?: CurrencyPairOptions
) => {
  const finance = new Finance({ seed: options?.seed })
  return finance.currency_pair(options)
}
