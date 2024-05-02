import { Time } from '../generator'
import { HourGeneratorFunction } from './interfaces'
import { HourOptions } from './interfaces'

export const hour: HourGeneratorFunction = (options?: HourOptions) => {
  const time = new Time({ seed: options?.seed })
  return time.hour(options)
}
