import { Generator, GeneratorOptions } from '@chancejs/generator'
import { StringGenerator } from '@chancejs/string'

export class Utils extends Generator {
  private string: StringGenerator

  constructor(options: GeneratorOptions) {
    super(options)
    this.string = new StringGenerator(options)
  }

  public hash = (options?: { length?: number; casing?: 'lower' | 'upper' }) => {
    const HEX_POOL = '0123456789abcdef'
    return this.string.string({
      pool: options?.casing === 'upper' ? HEX_POOL.toUpperCase() : HEX_POOL,
      length: options?.length,
    })
  }

  public base64 = (input: string): string => {
    if (typeof btoa === 'function') {
      return btoa(input)
    } else if (
      typeof Buffer !== 'undefined' &&
      typeof Buffer.from === 'function'
    ) {
      return Buffer.from(input).toString('base64')
    } else {
      throw new Error('No Base64 encoder available.')
    }
  }

  public guid = (version: number = 5): string => {
    const guidPool = 'abcdef1234567890'
    const variantPool = 'ab89'

    const guid =
      `${this.string.string({ pool: guidPool, length: 8 })}-` +
      `${this.string.string({ pool: guidPool, length: 4 })}-` +
      // The Version
      `${version}` +
      `${this.string.string({ pool: guidPool, length: 3 })}-` +
      // The Variant
      `${this.string.string({ pool: variantPool, length: 1 })}` +
      `${this.string.string({ pool: guidPool, length: 3 })}-` +
      `${this.string.string({ pool: guidPool, length: 12 })}`

    return guid
  }

  public pad = (number: number, width: number, pad = '0') => {
    const numStr = number.toString()
    return numStr.length >= width
      ? numStr
      : pad.repeat(width - numStr.length) + numStr
  }
}
