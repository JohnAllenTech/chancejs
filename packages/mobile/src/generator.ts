import { Generator, GeneratorOptions } from '@chancejs/generator'
import { IMobile, MobileOptions } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'

export class Mobile extends Generator implements IMobile {
  private naturalGenerator: NaturalGenerator

  constructor(options: GeneratorOptions) {
    super(options)
    this.naturalGenerator = new NaturalGenerator(options)
  }

  public android_id(options?: MobileOptions): string {
    return 'string'
  }

  public apple_token(options?: MobileOptions): string {
    return 'string'
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
