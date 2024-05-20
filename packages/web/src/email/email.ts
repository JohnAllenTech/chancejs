import { Web } from '../generator'
import { EmailGeneratorFunction } from './interfaces'
import { EmailOptions } from './interfaces'

export const email: EmailGeneratorFunction = (options?: EmailOptions) => {
  const web = new Web({ seed: options?.seed })
  return web.email(options)
}
