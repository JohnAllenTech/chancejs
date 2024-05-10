import { Location } from '../generator'
import { AreacodeGeneratorFunction } from './interfaces'
import { AreacodeOptions } from './interfaces'

export const areacode: AreacodeGeneratorFunction = (
  options?: AreacodeOptions
) => {
  const location = new Location({ seed: options?.seed })
  return location.areacode(options)
}
