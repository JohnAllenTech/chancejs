import { Web } from '../generator'
import { SemverGeneratorFunction } from './interfaces'
import { SemverOptions } from './interfaces'

export const semver: SemverGeneratorFunction = (options?: SemverOptions) => {
  const web = new Web({ seed: options?.seed })
  return web.semver(options)
}
