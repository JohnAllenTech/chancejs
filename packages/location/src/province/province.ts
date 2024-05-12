import { Location } from '../generator'
import { ProvinceGeneratorFunction } from './interfaces'
import { ProvinceOptions } from './interfaces'

export const province: ProvinceGeneratorFunction = (
  options?: ProvinceOptions
) => {
  const location = new Location({ seed: options?.seed })
  return location.province(options)
}
