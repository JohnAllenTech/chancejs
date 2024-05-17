import { Web } from '../generator'
import { PortGeneratorFunction } from './interfaces'
import { PortOptions } from './interfaces'

export const port: PortGeneratorFunction = (options?: PortOptions) => {
  const web = new Web({ seed: options?.seed })
  return web.port()
}
