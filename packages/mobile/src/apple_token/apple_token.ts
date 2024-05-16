import { Mobile } from '../generator'
import { AppleTokenGeneratorFunction } from './interfaces'
import { AppleTokenOptions } from './interfaces'

export const apple_token: AppleTokenGeneratorFunction = (
  options?: AppleTokenOptions
) => {
  const mobile = new Mobile({ seed: options?.seed })
  return mobile.apple_token(options)
}
