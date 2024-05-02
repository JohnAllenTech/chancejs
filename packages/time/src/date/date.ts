import { Time } from '../generator'
import { DateGeneratorFunction, DateOptions } from './interfaces'

export const date: DateGeneratorFunction = (options?: DateOptions) => {
  const time = new Time({ seed: options?.seed })
  return time.date(options)
}
