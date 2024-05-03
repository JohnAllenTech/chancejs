import { Time } from '../generator'
import { YearGeneratorFunction } from './interfaces'
import { YearOptions } from './interfaces'

export const year: YearGeneratorFunction = (options?: YearOptions) => {
  const time = new Time({ seed: options?.seed })
  return time.year(options)
}
