import { Generator, GeneratorOptions } from '@chancejs/generator'
import { IMobile, MobileOptions } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'
import { StringGenerator } from '@chancejs/string'
import { IntegerGenerator } from '@chancejs/integer'
import { AndroidIdOptions } from './android_id'
import { AppleTokenOptions } from './apple_token'
import { BbPinOptions } from './bb_pin'
import { Wp8Anid2Options } from './wp8_anid2'
import { Wp7AnidOptions } from './wp7_anid'

export class Mobile extends Generator implements IMobile {
  private naturalGenerator: NaturalGenerator
  private string: StringGenerator
  private integer: IntegerGenerator

  constructor(options: GeneratorOptions) {
    super(options)
    this.naturalGenerator = new NaturalGenerator(options)
    this.string = new StringGenerator(options)
    this.integer = new IntegerGenerator(options)
  }

  public android_id(_options?: AndroidIdOptions): string {
    return (
      'APA91' +
      this.string.string({
        pool: '0123456789abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_',
        length: 178,
      })
    )
  }

  public apple_token(_options?: AppleTokenOptions): string {
    return this.string.string({ pool: 'abcdef1234567890', length: 64 })
  }

  public bb_pin(_options?: BbPinOptions): string {
    return this.hash({ length: 8 })
  }

  public wp7_anid(): string {
    return (
      'A=' +
      this.guid().replace(/-/g, '').toUpperCase() +
      '&E=' +
      this.hash({ length: 3 }) +
      '&W=' +
      this.integer.integer({ min: 0, max: 9 })
    )
  }

  public wp8_anid2(): string {
    return this.base64(this.hash({ length: 32 }))
  }

  private hash = (options?: {
    length?: number
    casing?: 'lower' | 'upper'
  }) => {
    const HEX_POOL = '0123456789abcdef'
    return this.string.string({
      pool: options?.casing === 'upper' ? HEX_POOL.toUpperCase() : HEX_POOL,
      length: options?.length,
    })
  }

  private base64 = (input: string): string => {
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

  private guid = (version: number = 5): string => {
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
}
