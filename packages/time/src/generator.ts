import { Generator, GeneratorOptions } from '@chancejs/generator'
import { ITime, TimeOptions } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'

export class Time extends Generator implements ITime {
  private naturalGenerator: NaturalGenerator

  constructor(options: GeneratorOptions) {
    super(options)
    this.naturalGenerator = new NaturalGenerator(options)
  }

  public function1(options?: TimeOptions): string {
    return 'string'
  }

  public function2(options?: TimeOptions): string {
    return 'string'
  }

  public function3(options?: TimeOptions): string {
    return 'string'
  }
}
