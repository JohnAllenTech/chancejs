import { Web } from '../generator'
import { UrlGeneratorFunction } from './interfaces'
import { UrlOptions } from './interfaces'

export const url: UrlGeneratorFunction = (options?: UrlOptions) => {
  const web = new Web({ seed: options?.seed })
  return web.url(options)
}
