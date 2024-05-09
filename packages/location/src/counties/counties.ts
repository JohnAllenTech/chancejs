import { Location } from '../generator'
import { CountiesGeneratorFunction } from './interfaces'
import { CountiesOptions } from './interfaces'

export const counties: CountiesGeneratorFunction = (
  options?: CountiesOptions
) => {
  const location = new Location({ seed: options?.seed })
  return location.counties(options)
}
