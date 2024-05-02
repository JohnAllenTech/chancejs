import { Time } from '../generator'
import { MonthGeneratorFunction } from './interfaces'

export const month: MonthGeneratorFunction = options => {
  const time = new Time({ seed: options?.seed })
  return time.month(options)
}
