import { Web } from '../generator'
import { DomainGeneratorFunction } from './interfaces'
import { DomainOptions } from './interfaces'

export const domain: DomainGeneratorFunction = (options?: DomainOptions) => {
  const web = new Web({ seed: options?.seed })
  return web.domain(options)
}
