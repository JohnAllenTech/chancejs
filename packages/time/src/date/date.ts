import { Time } from '../generator'
import { DateGeneratorFunction } from './interfaces'

export const date: DateGeneratorFunction = options => {
  const time = new Time({ seed: options?.seed })
  return time.date(options)
}
