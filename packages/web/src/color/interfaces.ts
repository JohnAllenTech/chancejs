import { WebOptions } from '../interfaces'

export interface ColorOptions extends WebOptions {
  format?: 'hex' | 'shorthex' | 'rgb' | '0x' | 'rgba' | 'name'
  grayscale?: boolean
  casing?: 'upper' | 'lower'
  min?: number
  max?: number
  min_red?: number
  max_red?: number
  min_green?: number
  max_green?: number
  min_blue?: number
  max_blue?: number
  min_alpha?: number
  max_alpha?: number
}

export interface ColorGeneratorFunction {
  /**
   * Return a random color..
   *
   * @param { ColorOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * color()
   */
  (options?: ColorOptions): string
}
