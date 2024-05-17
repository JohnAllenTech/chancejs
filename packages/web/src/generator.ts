import { Generator, GeneratorOptions } from '@chancejs/generator'
import { IWeb, WebOptions } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'

export class Web extends Generator implements IWeb {
  private naturalGenerator: NaturalGenerator

  constructor(options: GeneratorOptions) {
    super(options)
    this.naturalGenerator = new NaturalGenerator(options)
  }

  public avatar(options?: WebOptions): string {
    return 'string'
  }

  public color(options?: WebOptions): string {
    return 'string'
  }

  public company(options?: WebOptions): string {
    return 'string'
  }

  public domain(options?: WebOptions): string {
    return 'string'
  }

  public email(options?: WebOptions): string {
    return 'string'
  }
  public fbid(options?: WebOptions): string {
    return 'string'
  }
  public google_analytics(options?: WebOptions): string {
    return 'string'
  }
  public hashtag(options?: WebOptions): string {
    return 'string'
  }
  public ip(options?: WebOptions): string {
    return 'string'
  }
  public ipv6(options?: WebOptions): string {
    return 'string'
  }
  public klout(options?: WebOptions): string {
    return 'string'
  }
  public profession(options?: WebOptions): string {
    return 'string'
  }
  public tld(options?: WebOptions): string {
    return 'string'
  }
  public twitter(options?: WebOptions): string {
    return 'string'
  }
  public url(options?: WebOptions): string {
    return 'string'
  }
}
