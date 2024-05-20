import { Web } from '../generator'
import { DomainGeneratorFunction } from './interfaces'
import { DomainOptions } from './interfaces'

// #TODO fix the typing on this when it is imported
export const domain: DomainGeneratorFunction = (options?: DomainOptions) => {
  const web = new Web({ seed: options?.seed })
  return web.domain(options)
}
