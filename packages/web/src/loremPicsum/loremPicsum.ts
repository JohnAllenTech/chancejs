import { Web } from '../generator'
import { LoremPicsumGeneratorFunction } from './interfaces'
import { LoremPicsumOptions } from './interfaces'

export const loremPicsum: LoremPicsumGeneratorFunction = (
  options?: LoremPicsumOptions
) => {
  const web = new Web({ seed: options?.seed })
  return web.loremPicsum(options)
}
