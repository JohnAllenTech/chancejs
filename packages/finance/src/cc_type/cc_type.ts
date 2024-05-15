import { Finance } from '../generator'
import { CcTypeGeneratorFunction } from './interfaces'

export const cc_type: CcTypeGeneratorFunction = options => {
  const finance = new Finance({ seed: options?.seed })
  return finance.cc_type(options)
}
