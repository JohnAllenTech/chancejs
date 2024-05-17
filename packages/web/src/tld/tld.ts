import { Web } from '../generator'
import { TldGeneratorFunction } from './interfaces'
import { TldOptions } from './interfaces'

export const tld: TldGeneratorFunction = (options?: TldOptions) => {
  const web = new Web({ seed: options?.seed })
  return web.tld()
}
