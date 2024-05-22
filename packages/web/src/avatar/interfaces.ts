import { WebOptions } from '../interfaces'

export interface AvatarOptions extends WebOptions {
  protocol?: 'http' | 'https'
  fileExtension?: 'bmp' | 'gif' | 'jpg' | 'png'
  fallback?:
    | '404'
    | 'mm'
    | 'identicon'
    | 'monsterid'
    | 'wavatar'
    | 'retro'
    | 'blank'
  rating?: 'g' | 'pg' | 'r' | 'x'
  email?: string
  size?: number
}

export interface AvatarGeneratorFunction {
  /**
   * return a URL to a random avatar from Gravatar..
   *
   * @param { AvatarOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * avatar()
   */
  (options?: AvatarOptions): string
}
