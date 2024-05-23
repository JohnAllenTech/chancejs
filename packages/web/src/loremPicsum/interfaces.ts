import { WebOptions } from '../interfaces'

export interface LoremPicsumOptions extends WebOptions {
  greyscale?: boolean
  blurred?: boolean
  width?: number
  height?: number
}

export interface LoremPicsumGeneratorFunction {
  /**
   * returns a random picsum.
   *
   * @param { LoremPicsumOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * loremPicsum()
   */
  (options?: LoremPicsumOptions): string
}
