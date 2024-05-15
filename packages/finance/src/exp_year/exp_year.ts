import { Finance } from '../generator'
import { ExpYearGeneratorFunction } from './interfaces'
import { ExpYearOptions } from './interfaces'

export const exp_year: ExpYearGeneratorFunction = (
  options?: ExpYearOptions
) => {
  const finance = new Finance({ seed: options?.seed })
  return finance.exp_year(options)
}
