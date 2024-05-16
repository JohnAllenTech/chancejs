import { Generator, GeneratorOptions } from '@chancejs/generator'
import { IMobile, MobileOptions } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'
import { StringGenerator } from '@chancejs/string'
import { AndroidIdOptions } from './android_id'
import { AppleTokenOptions } from './apple_token'

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

  public bb_pin(options?: MobileOptions): string {
    return 'string'
  }

  public wp7_anid(options?: MobileOptions): string {
    return 'string'
  }

  public wp8_anid2(options?: MobileOptions): string {
    return 'string'
  }
}
