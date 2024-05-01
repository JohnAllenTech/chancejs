import { Time } from '../generator'
import { DateGeneratorFunction } from './interfaces'
import { DateOptions } from './interfaces'

export const date: DateGeneratorFunction = (options?: DateOptions) => {
  const time = new Time({ seed: options?.seed })
  return time.date(options)
}
