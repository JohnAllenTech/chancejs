import { Finance } from '../generator'
import { EuroGeneratorFunction } from './interfaces'
import { EuroOptions } from './interfaces'

export const euro: EuroGeneratorFunction = (options?: EuroOptions) => {
  const finance = new Finance({ seed: options?.seed })
  return finance.euro(options)
}
