import { Time } from '../generator'
import { SecondGeneratorFunction } from './interfaces'
import { SecondOptions } from './interfaces'

export const second: SecondGeneratorFunction = (options?: SecondOptions) => {
  const time = new Time({ seed: options?.seed })
  return time.second()
}
