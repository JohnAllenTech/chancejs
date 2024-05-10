import { Location } from '../generator'
import { StateGeneratorFunction } from './interfaces'

export const state: StateGeneratorFunction = options => {
  const location = new Location({ seed: options?.seed })
  return location.state(options)
}
