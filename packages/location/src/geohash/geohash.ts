import { Location } from '../generator'
import { GeohashGeneratorFunction } from './interfaces'
import { GeohashOptions } from './interfaces'

export const geohash: GeohashGeneratorFunction = (options?: GeohashOptions) => {
  const location = new Location({ seed: options?.seed })
  return location.geohash(options)
}
