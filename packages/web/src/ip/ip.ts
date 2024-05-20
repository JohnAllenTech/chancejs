import { Web } from '../generator'
import { IpGeneratorFunction } from './interfaces'
import { IpOptions } from './interfaces'

export const ip: IpGeneratorFunction = (options?: IpOptions) => {
  const web = new Web({ seed: options?.seed })
  return web.ip()
}
