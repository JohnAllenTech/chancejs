import { Time } from '../generator'
import { TimezoneGeneratorFunction } from './interfaces'
import { TimezoneOptions } from './interfaces'

export const timezone: TimezoneGeneratorFunction = (
  options?: TimezoneOptions
) => {
  const time = new Time({ seed: options?.seed })
  return time.timezone(options)
}
