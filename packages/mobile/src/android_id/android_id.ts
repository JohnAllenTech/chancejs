import { Mobile } from '../generator'
import { AndroidIdGeneratorFunction } from './interfaces'
import { AndroidIdOptions } from './interfaces'

export const android_id: AndroidIdGeneratorFunction = (
  options?: AndroidIdOptions
) => {
  const mobile = new Mobile({ seed: options?.seed })
  return mobile.android_id(options)
}
