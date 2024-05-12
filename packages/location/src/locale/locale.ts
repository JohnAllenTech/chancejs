import { Location } from '../generator'
import { LocaleGeneratorFunction } from './interfaces'
import { LocaleOptions } from './interfaces'

export const locale: LocaleGeneratorFunction = (options?: LocaleOptions) => {
  const location = new Location({ seed: options?.seed })
  return location.locale(options)
}
