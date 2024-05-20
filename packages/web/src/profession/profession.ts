import { Web } from '../generator'
import { ProfessionGeneratorFunction } from './interfaces'
import { ProfessionOptions } from './interfaces'

export const profession: ProfessionGeneratorFunction = (
  options?: ProfessionOptions
) => {
  const web = new Web({ seed: options?.seed })
  return web.profession(options)
}
