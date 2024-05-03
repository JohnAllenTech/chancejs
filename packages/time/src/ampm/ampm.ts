import { Time } from '../generator'
import { AmpmGeneratorFunction } from './interfaces'
import { AmpmOptions } from './interfaces'

export const ampm: AmpmGeneratorFunction = (options?: AmpmOptions) => {
  const time = new Time({ seed: options?.seed })
  return time.ampm(options)
}
