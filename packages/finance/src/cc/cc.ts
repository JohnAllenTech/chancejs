import { Finance } from '../generator'
import { CcGeneratorFunction } from './interfaces'
import { CcOptions } from './interfaces'

export const cc: CcGeneratorFunction = (options?: CcOptions) => {
  const finance = new Finance({ seed: options?.seed })
  return finance.cc(options)
}
