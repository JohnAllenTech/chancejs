import { Web } from '../generator'
import { HashtagGeneratorFunction } from './interfaces'
import { HashtagOptions } from './interfaces'

export const hashtag: HashtagGeneratorFunction = (options?: HashtagOptions) => {
  const web = new Web({ seed: options?.seed })
  return web.hashtag()
}
