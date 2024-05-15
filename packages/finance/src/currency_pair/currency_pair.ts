import { Finance } from '../generator'
import { CurrencyPairGeneratorFunction } from './interfaces'

export const currency_pair: CurrencyPairGeneratorFunction = options => {
  const finance = new Finance({ seed: options?.seed })
  return finance.currency_pair(options)
}
