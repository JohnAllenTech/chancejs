import { Generator, GeneratorOptions, n, times } from '@chancejs/generator'
import { IWeb, WebOptions } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'
import { Text } from '@chancejs/text'
import { IntegerGenerator } from '@chancejs/integer'
import { Picker } from '@chancejs/pick'
import { Utils } from '@chancejs/utils'
import { BlueImpMD5 } from '@chancejs/blue-imp-md5'
import { HexGenerator } from '@chancejs/hex'

import { FloatingGenerator } from '@chancejs/floating'
import { tlds } from './tld'
import { DomainOptions } from './domain'
import { EmailOptions } from './email'
import { companies } from './company'
import { ProfessionOptions, professions, ranks } from './profession'
import { UrlOptions } from './url'
import { AvatarOptions } from './avatar'
import { LoremPicsumOptions } from './loremPicsum'
import { ColorOptions, colorNames } from './color'
import { SemverOptions } from './semver'

export class Web extends Generator implements IWeb {
  private naturalGenerator: NaturalGenerator
  private floatingGenerator: FloatingGenerator
  private text: Text
  private integer: IntegerGenerator
  private picker: Picker
  private utils: Utils
  private blueMd5: BlueImpMD5
  private hexGenerator: HexGenerator

  constructor(options: GeneratorOptions) {
    super(options)
    this.naturalGenerator = new NaturalGenerator(options)
    this.text = new Text(options)
    this.integer = new IntegerGenerator(options)
    this.picker = new Picker(options)
    this.utils = new Utils(options)
    this.blueMd5 = new BlueImpMD5()
    this.floatingGenerator = new FloatingGenerator(options)
    this.hexGenerator = new HexGenerator(options)
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

  public color(options?: ColorOptions): string {
    const isGrayscale: boolean = options?.grayscale ?? false
    const format: string =
      options?.format ??
      this.picker.pickOne(['hex', 'shorthex', 'rgb', 'rgba', '0x', 'name'])

    let min_rgb: number = options?.min ?? 0
    let max_rgb: number = options?.max ?? 255
    let min_red: number = options?.min_red ?? min_rgb
    let max_red: number = options?.max_red ?? max_rgb
    let min_green: number = options?.min_green ?? min_rgb
    let max_green: number = options?.max_green ?? max_rgb
    let min_blue: number = options?.min_blue ?? min_rgb
    let max_blue: number = options?.max_blue ?? max_rgb
    let min_alpha: number = options?.min_alpha ?? 0
    let max_alpha: number = options?.max_alpha ?? 1

    if (isGrayscale && min_rgb === 0 && max_rgb === 255 && min_red && max_red) {
      min_rgb = (min_red + min_green + min_blue) / 3
      max_rgb = (max_red + max_green + max_blue) / 3
    }

    function gray(value: number, delimiter: string = ''): string {
      return [value, value, value].join(delimiter)
    }

    function rgb(this: any, hasAlpha: boolean): string {
      const rgbValue: string = hasAlpha ? 'rgba' : 'rgb'
      const alphaChannel: string = hasAlpha
        ? `,${this.floatingGenerator.floating({ min: min_alpha, max: max_alpha })}`
        : ''
      const colorValue: string = isGrayscale
        ? gray(
            this.naturalGenerator.natural({ min: min_rgb, max: max_rgb }),
            ','
          )
        : `${this.naturalGenerator.natural({ min: min_red, max: max_red })},${this.naturalGenerator.natural({ min: min_green, max: max_green })},${this.naturalGenerator.natural({ min: min_blue, max: max_blue })}`
      return `${rgbValue}(${colorValue}${alphaChannel})`
    }

    function hex(
      this: any,
      options: {
        start: number
        end: number
        withHash?: boolean
        format: string
      }
    ): string {
      let hexstring: string = ''

      if (isGrayscale) {
        hexstring = gray(
          this.utils.pad(
            this.hexGenerator.hex({ min: min_rgb, max: max_rgb }),
            2
          )
        )
        if (options.format === 'shorthex') {
          hexstring = gray(this.hexGenerator.hex({ min: 0, max: 15 }))
        }
      } else if (options.format === 'shorthex') {
        hexstring = `${this.utils.pad(this.hexGenerator.hex({ min: Math.floor(min_red / 16), max: Math.floor(max_red / 16) }), 1)}${this.utils.pad(this.hexGenerator.hex({ min: Math.floor(min_green / 16), max: Math.floor(max_green / 16) }), 1)}${this.utils.pad(this.hexGenerator.hex({ min: Math.floor(min_blue / 16), max: Math.floor(max_blue / 16) }), 1)}`
      } else {
        hexstring = `${this.utils.pad(this.hexGenerator.hex({ min: min_red, max: max_red }), 2)}${this.utils.pad(this.hexGenerator.hex({ min: min_green, max: max_green }), 2)}${this.utils.pad(this.hexGenerator.hex({ min: min_blue, max: max_blue }), 2)}`
      }

      return options.withHash ? `#${hexstring}` : hexstring
    }

    let colorValue: string
    switch (format) {
      case 'hex':
      case 'shorthex':
        colorValue = hex.call(this, {
          start: format === 'hex' ? 2 : 1,
          end: format === 'hex' ? 6 : 3,
          withHash: true,
          format,
        })
        break
      case 'rgb':
        colorValue = rgb.call(this, false)
        break
      case 'rgba':
        colorValue = rgb.call(this, true)
        break
      case '0x':
        colorValue = `0x${hex.call(this, { start: 2, end: 6, format, withHash: false })}`
        break
      case 'name':
        return this.picker.pickOne(colorNames)
      default:
        throw new RangeError(
          'Invalid format provided. Please provide one of "hex", "shorthex", "rgb", "rgba", "0x", or "name".'
        )
    }

    if (options?.casing === 'upper') {
      colorValue = colorValue.toUpperCase()
    }

    return colorValue
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
  public fbid(): string {
    return '10000' + this.naturalGenerator.natural({ numerals: 11 }).toString()
  }
  public google_analytics(): string {
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

  public loremPicsum(options?: LoremPicsumOptions): string {
    const greyscale = options?.greyscale ? 'g/' : ''
    const query = options?.blurred ? '/?blur' : '/?random'
    const width = options?.height ?? 500
    const height = options?.width ?? 500

    return `https://picsum.photos/${greyscale}${width}/${height}${query}`
  }

  public port(): number {
    return this.integer.integer({ min: 0, max: 65535 })
  }

  public semver(options?: SemverOptions): string {
    const range =
      options?.range ??
      this.picker.pickOne(['^', '~', '<', '>', '<=', '>=', '='])

    const prerelease = options?.include_prerelease
      ? this.utils.weighted(['', '-dev', '-beta', '-alpha'], [50, 10, 5, 1])
      : ''

    const versions = times(3, () =>
      this.naturalGenerator.natural({ min: 1, max: 10 })
    )

    return range + versions.join('.') + prerelease
  }
}
