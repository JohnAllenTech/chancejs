import { Generator, GeneratorOptions } from '@chancejs/generator'
import { ITime, TimeOptions } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'

export class Time extends Generator implements ITime {
  private naturalGenerator: NaturalGenerator

  constructor(options: GeneratorOptions) {
    super(options)
    this.naturalGenerator = new NaturalGenerator(options)
  }

  public ampm(options?: TimeOptions): string {
    return 'string'
  }

  public date(options?: TimeOptions): string {
    return 'string'
  }

  public hammertime(options?: TimeOptions): string {
    return 'string'
  }
  public hour(options?: TimeOptions): string {
    return 'string'
  }
  public millisecond(options?: TimeOptions): string {
    return 'string'
  }
  public minute(options?: TimeOptions): string {
    return 'string'
  }
  public month(options?: TimeOptions): string {
    return 'string'
  }
  public timestamp(options?: TimeOptions): string {
    return 'string'
  }
  public timezone(options?: TimeOptions): string {
    return 'string'
  }
  public weekday(options?: TimeOptions): string {
    return 'string'
  }
  public year(options?: TimeOptions): string {
    return 'string'
  }
}
