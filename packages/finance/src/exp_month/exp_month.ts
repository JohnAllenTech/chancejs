import { Finance } from '../generator'
import { ExpMonthGeneratorFunction } from './interfaces'
import { ExpMonthOptions } from './interfaces'

export const exp_month: ExpMonthGeneratorFunction = (
  options?: ExpMonthOptions
) => {
  const finance = new Finance({ seed: options?.seed })
  return finance.exp_month(options)
}
