import { Time } from '../generator'
import { MinuteGeneratorFunction } from './interfaces'
import { MinuteOptions } from './interfaces'

export const minute: MinuteGeneratorFunction = (options?: MinuteOptions) => {
  const time = new Time({ seed: options?.seed })
  return time.minute(options)
}
