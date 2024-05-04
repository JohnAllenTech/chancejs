import { Time } from '../generator'
import { HammertimeGeneratorFunction } from './interfaces'
import { HammertimeOptions } from './interfaces'

export const hammertime: HammertimeGeneratorFunction = (
  options?: HammertimeOptions
) => {
  const time = new Time({ seed: options?.seed })
  return time.hammertime(options)
}
