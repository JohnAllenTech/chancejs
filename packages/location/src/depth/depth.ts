import { Location } from '../generator'
import { DepthGeneratorFunction } from './interfaces'
import { DepthOptions } from './interfaces'

export const depth: DepthGeneratorFunction = (options?: DepthOptions) => {
  const location = new Location({ seed: options?.seed })
  return location.depth(options)
}
