import { Web } from '../generator'
import { ColorGeneratorFunction } from './interfaces'
import { ColorOptions } from './interfaces'

export const color: ColorGeneratorFunction = (options?: ColorOptions) => {
  const web = new Web({ seed: options?.seed })
  return web.color(options)
}
