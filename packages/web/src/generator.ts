import { Generator, GeneratorOptions, n } from '@chancejs/generator'
import { IWeb, WebOptions } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'
import { Text } from '@chancejs/text'
import { IntegerGenerator } from '@chancejs/integer'
import { Picker } from '@chancejs/pick'
import { Utils } from '@chancejs/utils'
import { tlds } from './tld'
import { DomainOptions } from './domain'
import { EmailOptions } from './email'
import { companies } from './company'
import { ProfessionOptions, professions, ranks } from './profession'

export class Web extends Generator implements IWeb {
  private naturalGenerator: NaturalGenerator
  private text: Text
  private integer: IntegerGenerator
  private picker: Picker
  private utils: Utils

  constructor(options: GeneratorOptions) {
    super(options)
    this.naturalGenerator = new NaturalGenerator(options)
    this.text = new Text(options)
    this.integer = new IntegerGenerator(options)
    this.picker = new Picker(options)
    this.utils = new Utils(options)
  }

  public avatar(options?: WebOptions): string {
    return 'string'
  }

  public color(options?: WebOptions): string {
    return 'string'
  }

  public company(): string {
    return this.picker.pickOne(companies)
  }

  public domain(options?: DomainOptions): string {
    return `${this.text.word()}.${options?.tld ?? this.tld()}`
  }

  public email(options?: EmailOptions): string {
    return `${this.text.word({ length: options?.length })}@${options?.domain ?? this.domain()}`
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
  public ip(): string {
    return (
      this.naturalGenerator.natural({ min: 1, max: 254 }) +
      '.' +
      this.naturalGenerator.natural({ max: 255 }) +
      '.' +
      this.naturalGenerator.natural({ max: 255 }) +
      '.' +
      this.naturalGenerator.natural({ min: 1, max: 254 })
    )
  }
  public ipv6(): string {
    return n(this.utils.hash, 8, { length: 4 }).join(':')
  }
  public klout(options?: WebOptions): string {
    return 'string'
  }
  public profession(options?: ProfessionOptions): string {
    const profession = this.picker.pickOne(professions)
    return options?.rank ? this.picker.pickOne(ranks) + profession : profession
  }
  public tld(): string {
    return this.picker.pickOne(tlds)
  }
  public twitter(): string {
    return '@' + this.text.word()
  }
  public url(options?: WebOptions): string {
    return 'string'
  }

  public loremPicsum(options?: WebOptions): string {
    return 'string'
  }

  public port(): number {
    return this.integer.integer({ min: 0, max: 65535 })
  }

  public semvar(options?: WebOptions): string {
    return 'string'
  }
}
