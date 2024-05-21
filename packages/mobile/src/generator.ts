import { Generator, GeneratorOptions } from '@chancejs/generator'
import { IMobile, MobileOptions } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'
import { StringGenerator } from '@chancejs/string'
import { IntegerGenerator } from '@chancejs/integer'
import { AndroidIdOptions } from './android_id'
import { AppleTokenOptions } from './apple_token'
import { BbPinOptions } from './bb_pin'
import { Utils } from '@chancejs/utils'

export class Mobile extends Generator implements IMobile {
  private utils: Utils
  private string: StringGenerator
  private integer: IntegerGenerator

  constructor(options: GeneratorOptions) {
    super(options)
    this.utils = new Utils(options)
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
    return this.utils.hash({ length: 8 })
  }

  public wp7_anid(): string {
    return (
      'A=' +
      this.utils.guid().replace(/-/g, '').toUpperCase() +
      '&E=' +
      this.utils.hash({ length: 3 }) +
      '&W=' +
      this.integer.integer({ min: 0, max: 9 })
    )
  }

  public wp8_anid2(): string {
    return this.utils.base64(this.utils.hash({ length: 32 }))
  }
}
