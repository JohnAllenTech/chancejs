import { Time } from '../generator'
import { MillisecondGeneratorFunction } from './interfaces'
import { MillisecondOptions } from './interfaces'

export const millisecond: MillisecondGeneratorFunction = (
  options?: MillisecondOptions
) => {
  const time = new Time({ seed: options?.seed })
  return time.millisecond(options)
}
