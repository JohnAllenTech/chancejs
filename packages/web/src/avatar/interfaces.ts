import { WebOptions } from '../interfaces'

enum PROTOCOLS {
  http = 'http',
  https = 'https',
}
enum FILE_TYPES {
  bmp = 'bmp',
  gif = 'gif',
  jpg = 'jpg',
  png = 'png',
}
// enum FALLBACKS {
//   '404' = '404', // Return 404 if not found
//   mm = 'mm', // Mystery man
//   identicon = 'identicon', // Geometric pattern based on hash
//   monsterid = 'monsterid', // A generated monster icon
//   wavatar = 'wavatar', // A generated face
//   retro = 'retro', // 8-bit icon
//   blank = 'blank', // A transparent png
// }
enum RATINGS {
  g = 'g',
  pg = 'pg',
  r = 'r',
  x = 'x',
}

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
