import { Generator, GeneratorOptions } from '@chancejs/generator'
import { IMobile, MobileOptions } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'
import { StringGenerator } from '@chancejs/string'
import { AndroidIdOptions } from './android_id'
import { AppleTokenOptions } from './apple_token'
import { BbPinOptions } from './bb_pin'

export class Mobile extends Generator implements IMobile {
  private naturalGenerator: NaturalGenerator
  private string: StringGenerator

  constructor(options: GeneratorOptions) {
    super(options)
    this.naturalGenerator = new NaturalGenerator(options)
    this.string = new StringGenerator(options)
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

  public wp7_anid(options?: MobileOptions): string {
    return 'string'
  }

  public wp8_anid2(options?: MobileOptions): string {
    return 'string'
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
}
