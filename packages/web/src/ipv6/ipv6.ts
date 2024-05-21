import { Web } from '../generator'
import { Ipv6GeneratorFunction } from './interfaces'
import { Ipv6Options } from './interfaces'

export const ipv6: Ipv6GeneratorFunction = (options?: Ipv6Options) => {
  const web = new Web({ seed: options?.seed })
  return web.ipv6()
}
