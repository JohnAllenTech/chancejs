import { Web } from '../generator'
import { FbidGeneratorFunction } from './interfaces'
import { FbidOptions } from './interfaces'

export const fbid: FbidGeneratorFunction = (options?: FbidOptions) => {
  const web = new Web({ seed: options?.seed })
  return web.fbid()
}
