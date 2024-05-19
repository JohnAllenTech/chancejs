import { Web } from '../generator'
import { TwitterGeneratorFunction } from './interfaces'
import { TwitterOptions } from './interfaces'

export const twitter: TwitterGeneratorFunction = (options?: TwitterOptions) => {
  const web = new Web({ seed: options?.seed })
  return web.twitter()
}
