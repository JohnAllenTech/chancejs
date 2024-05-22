import { Generator, GeneratorOptions, n } from '@chancejs/generator'
import { IWeb, WebOptions } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'
import { Text } from '@chancejs/text'
import { IntegerGenerator } from '@chancejs/integer'
import { Picker } from '@chancejs/pick'
import { Utils } from '@chancejs/utils'
import { BlueImpMD5 } from '@chancejs/blue-imp-md5'
import { tlds } from './tld'
import { DomainOptions } from './domain'
import { EmailOptions } from './email'
import { companies } from './company'
import { ProfessionOptions, professions, ranks } from './profession'
import { UrlOptions } from './url'
import { AvatarOptions } from './avatar'

export class Web extends Generator implements IWeb {
  private naturalGenerator: NaturalGenerator
  private text: Text
  private integer: IntegerGenerator
  private picker: Picker
  private utils: Utils
  private blueMd5: BlueImpMD5

  constructor(options: GeneratorOptions) {
    super(options)
    this.naturalGenerator = new NaturalGenerator(options)
    this.text = new Text(options)
    this.integer = new IntegerGenerator(options)
    this.picker = new Picker(options)
    this.utils = new Utils(options)
    this.blueMd5 = new BlueImpMD5()
  }

  public avatar(options: AvatarOptions = {}): string {
    const URL_BASE = '//www.gravatar.com/avatar/'
    const {
      protocol = 'http',
      fileExtension = '',
      fallback = '',
      rating = '',
      email = this.email(),
      size = '',
    } = options

    const queryParams = [
      size && `s=${size}`,
      rating && `r=${rating}`,
      fallback && `d=${fallback}`,
    ]
      .filter(Boolean)
      .join('&')

    return `${protocol}:${URL_BASE}${this.blueMd5.md5(email)}${fileExtension ? `.${fileExtension}` : ''}${queryParams ? `?${queryParams}` : ''}`
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
    const account = this.utils.pad(
      this.naturalGenerator.natural({ max: 999999 }),
      6
    )
    const property = this.utils.pad(
      this.naturalGenerator.natural({ max: 99 }),
      2
    )

    return 'UA-' + account + '-' + property
  }
  public hashtag(): string {
    return '#' + this.text.word()
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

  // keeping this for completeness but klout was sunsetted in 2018
  public klout(): number {
    return this.naturalGenerator.natural({ min: 1, max: 99 })
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
  public url(options: UrlOptions = {}): string {
    const {
      extensions,
      domain_prefix = '',
      domain = this.domain(),
      protocol = 'http',
      path = this.text.word(),
    } = options

    const extension = extensions ? '.' + this.picker.pickOne(extensions) : ''
    const prefix = domain_prefix ? domain_prefix + '.' : ''

    return `${protocol}://${prefix}${domain}/${path}${extension}`
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
