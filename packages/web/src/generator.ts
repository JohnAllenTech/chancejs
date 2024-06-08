import { Generator, GeneratorOptions, n } from '@chancejs/generator'
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
    function gray(value: any, delimiter: string = '') {
      return [value, value, value].join(delimiter)
    }

    function rgb(this: any, hasAlpha: any) {
      const rgbValue = hasAlpha ? 'rgba' : 'rgb'
      const alphaChannel = hasAlpha
        ? ',' +
          this.floatingGenerator.floating({ min: min_alpha, max: max_alpha })
        : ''
      const colorValue = isGrayscale
        ? gray(
            this.naturalGenerator.natural({ min: min_rgb, max: max_rgb }),
            ','
          )
        : this.naturalGenerator.natural({ min: min_green, max: max_green }) +
          ',' +
          this.naturalGenerator.natural({ min: min_blue, max: max_blue }) +
          ',' +
          this.naturalGenerator.natural({ max: 255 })
      return rgbValue + '(' + colorValue + alphaChannel + ')'
    }

    function hex(
      gen: any,
      options: {
        this: any
        start: any
        end: any
        withHash?: boolean
        format: string
      }
    ) {
      let hexstring = ''

      if (isGrayscale) {
        hexstring = gray(
          gen.utils.pad(gen.hexGenerator.hex({ min: min_rgb, max: max_rgb }), 2)
        )
        if (options?.format === 'shorthex') {
          hexstring = gray(gen.hexGenerator.hex({ min: 0, max: 15 }))
        }
      } else {
        if (options?.format === 'shorthex') {
          hexstring =
            gen.utils.pad(
              gen.hexGenerator.hex({
                min: Math.floor(min_red / 16),
                max: Math.floor(max_red / 16),
              }),
              1
            ) +
            gen.utils.pad(
              gen.hexGenerator.hex({
                min: Math.floor(min_green / 16),
                max: Math.floor(max_green / 16),
              }),
              1
            ) +
            gen.utils.pad(
              gen.hexGenerator.hex({
                min: Math.floor(min_blue / 16),
                max: Math.floor(max_blue / 16),
              }),
              1
            )
        } else if (
          min_red ||
          max_red ||
          min_green ||
          max_green ||
          min_blue ||
          max_blue
        ) {
          hexstring =
            gen.utils.pad(
              gen.hexGenerator.hex({ min: min_red, max: max_red }),
              2
            ) +
            gen.utils.pad(
              gen.hexGenerator.hex({ min: min_green, max: max_green }),
              2
            ) +
            gen.utils.pad(
              gen.hexGenerator.hex({ min: min_blue, max: max_blue }),
              2
            )
        } else {
          hexstring =
            gen.utils.pad(
              gen.hexGenerator.hex({ min: min_rgb, max: max_rgb }),
              2
            ) +
            gen.utils.pad(
              gen.hexGenerator.hex({ min: min_rgb, max: max_rgb }),
              2
            ) +
            gen.utils.pad(
              gen.hexGenerator.hex({ min: min_rgb, max: max_rgb }),
              2
            )
        }
      }

      return options?.withHash ? '#' + hexstring : hexstring
    }

    const isGrayscale = options?.grayscale
    const format =
      options?.format ??
      this.picker.pickOne(['hex', 'shorthex', 'rgb', 'rgba', '0x', 'name'])
    let min_rgb = options?.min ?? 0
    let max_rgb = options?.max ?? 255
    let min_red = options?.min_red ?? min_rgb
    let max_red = options?.max_red ?? max_rgb
    let min_green = options?.min_green ?? min_rgb
    let max_green = options?.max_green ?? max_rgb
    let min_blue = options?.min_blue ?? min_rgb
    let max_blue = options?.max_blue ?? max_rgb
    let min_alpha = options?.min_alpha ?? 0
    let max_alpha = options?.max_alpha ?? 1

    if (isGrayscale && min_rgb === 0 && max_rgb === 255 && min_red && max_red) {
      min_rgb = (min_red + min_green + min_blue) / 3
      max_rgb = (max_red + max_green + max_blue) / 3
    }
    let colorValue

    if (format === 'hex') {
      colorValue = hex(this, {
        this: this,
        start: 2,
        end: 6,
        withHash: true,
        format,
      })
    } else if (format === 'shorthex') {
      colorValue = hex(this, {
        this: this,
        start: 1,
        end: 3,
        withHash: true,
        format,
      })
    } else if (format === 'rgb') {
      colorValue = rgb.call(this, false)
    } else if (format === 'rgba') {
      colorValue = rgb.call(this, true)
    } else if (format === '0x') {
      colorValue =
        '0x' +
        hex(this, {
          this: this,
          start: 2,
          end: 6,
          format,
          withHash: false,
        })
    } else if (options?.format === 'name') {
      return this.picker.pickOne(colorNames)
    } else {
      throw new RangeError(
        'Invalid format provided. Please provide one of "hex", "shorthex", "rgb", "rgba", "0x" or "name".'
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

  public semvar(options?: WebOptions): string {
    return 'string'
  }
}
