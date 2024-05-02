import { Time } from '../generator'
import { WeekdayGeneratorFunction } from './interfaces'
import { WeekdayOptions } from './interfaces'

export const weekday: WeekdayGeneratorFunction = (options?: WeekdayOptions) => {
  const time = new Time({ seed: options?.seed })
  return time.weekday(options)
}
