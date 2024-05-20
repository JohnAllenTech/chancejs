import { Web } from '../generator'
import { CompanyGeneratorFunction } from './interfaces'
import { CompanyOptions } from './interfaces'

export const company: CompanyGeneratorFunction = (options?: CompanyOptions) => {
  const web = new Web({ seed: options?.seed })
  return web.company()
}
