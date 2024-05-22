import { Web } from '../generator'
import { AvatarGeneratorFunction } from './interfaces'
import { AvatarOptions } from './interfaces'

export const avatar: AvatarGeneratorFunction = (options?: AvatarOptions) => {
  const web = new Web({ seed: options?.seed })
  return web.avatar(options)
}
