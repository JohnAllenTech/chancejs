import { Time } from '../generator'
import { Function1GeneratorFunction } from './interfaces'
import { Function1Options } from './interfaces'

export const function1: Function1GeneratorFunction = (
  options?: Function1Options
) => {
  const time = new Time({ seed: options?.seed })
  return time.function1(options)
}
