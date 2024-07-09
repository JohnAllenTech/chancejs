import {
  Generator,
  GeneratorOptions,
  n,
  capitalize,
} from '@johnallentech/generator'
import { string } from '@johnallentech/string'
import { IntegerGenerator } from '@johnallentech/integer'
import { CharacterGenerator } from '@johnallentech/character'
import { bool } from '@johnallentech/bool'
import { Picker } from '@johnallentech/pick'
import { NaturalGenerator } from '@johnallentech/natural'
import { floating } from '@johnallentech/floating'
import { Text } from '@johnallentech/text'

import { AddressOptions } from './address'
import { AltitudeOptions } from './altitude'
import { AreacodeOptions } from './areacode'
import { CoordinatesOptions } from './coordinates'
import { CountiesOptions, countiesObject } from './counties'
import { CountryOptions, CountryReturnType, countries } from './country'
import { DepthOptions } from './depth'
import { GeohashOptions } from './geohash'
import { ILocation, LocationOptions } from './interfaces'
import { LatitudeOptions, LatitudeReturnType } from './latitude'
import { LocaleOptions, locale_regions, locale_languages } from './locale'
import { LongitudeOptions, LongitudeReturnType } from './longitude'
import { PhoneOptions } from './phone'
import { PostalOptions } from './postal'
import { PostcodeOptions, postcodeAreas } from './postcode'
import { ProvinceOptions, provinces } from './province'
import { StateOptions, StateReturnType, RawState, states } from './state'
import { StreetOptions, StreetSuffix, street_suffixes } from './street'
import { ZipOptions } from './zip'

export class Location extends Generator implements ILocation {
  private naturalGenerator: NaturalGenerator
  private picker: Picker
  private text: Text
  private character: CharacterGenerator
  private integer: IntegerGenerator

  constructor(options: GeneratorOptions) {
    super(options)
    this.naturalGenerator = new NaturalGenerator(options)
    this.picker = new Picker(options)
    this.text = new Text(options)
    this.character = new CharacterGenerator(options)
    this.integer = new IntegerGenerator(options)
  }

  public address(options?: AddressOptions): string {
    return (
      this.naturalGenerator.natural({ min: 1, max: 2000 }) +
      ' ' +
      this.street(options)
    )
  }

  public altitude(options?: AltitudeOptions): number {
    return floating({
      min: options?.min ?? 0,
      max: options?.max ?? 8848,
      fixed: options?.fixed ?? 5,
    })
  }

  public areacode(options: AreacodeOptions = { parens: true }): string {
    var areacode = options?.exampleNumber
      ? '555'
      : this.naturalGenerator.natural({ min: 2, max: 9 }).toString() +
        this.naturalGenerator.natural({ min: 0, max: 8 }).toString() +
        this.naturalGenerator.natural({ min: 0, max: 9 }).toString()

    return options.parens ? '(' + areacode + ')' : areacode
  }

  public city(_options?: LocationOptions): string {
    return capitalize(this.text.word({ syllables: 3 }))
  }
  public coordinates(options?: CoordinatesOptions): string {
    return this.latitude(options) + ', ' + this.longitude(options)
  }
  public country<O extends CountryOptions>(options?: O): CountryReturnType<O> {
    var country = this.picker.pickOne(countries)
    return (
      options?.raw
        ? country
        : options?.full
          ? country.name
          : country.abbreviation
    ) as CountryReturnType<O>
  }
  public depth(options?: DepthOptions): number {
    return floating({
      min: options?.min ?? -10994,
      max: options?.max ?? 0,
      fixed: options?.fixed ?? 5,
    })
  }
  public geohash(options?: GeohashOptions): string {
    return string({
      length: options?.length ?? 7,
      pool: '0123456789bcdefghjkmnpqrstuvwxyz',
    })
  }
  public latitude<O extends LatitudeOptions>(
    options?: O
  ): LatitudeReturnType<O> {
    const format = options?.format ?? 'dd'

    if (format === 'ddm' || format === 'dms') {
      testRange(
        !!options?.min && (options?.min < 0 || options?.min > 89),
        'Chance: Min specified is out of range. Should be between 0 - 89'
      )
      testRange(
        !!options?.max && (options?.max < 0 || options?.max > 89),
        'Chance: Max specified is out of range. Should be between 0 - 89'
      )
      testRange(
        !!options?.fixed && options?.fixed > 4,
        'Chance: Fixed specified should be below or equal to 4'
      )
    }

    switch (format) {
      case 'ddm': {
        return (this.integer.integer({
          min: options?.min ?? 0,
          max: options?.max ?? 89,
        }) +
          '°' +
          floating({
            min: 0,
            max: 59,
            fixed: options?.fixed ?? 4,
          })) as LatitudeReturnType<O>
      }
      case 'dms': {
        return (this.integer.integer({
          min: options?.min ?? 0,
          max: options?.max ?? 89,
        }) +
          '°' +
          this.integer.integer({ min: 0, max: 59 }) +
          '’' +
          floating({ min: 0, max: 59, fixed: options?.fixed ?? 4 }) +
          '”') as LatitudeReturnType<O>
      }
      case 'dd':
      default: {
        return floating({
          min: options?.min ?? -90,
          max: options?.max ?? 90,
          fixed: options?.fixed ?? 5,
        }) as LatitudeReturnType<O>
      }
    }
  }
  public locale(options?: LocaleOptions): string {
    return this.picker.pickOne(
      options?.region ? locale_regions : locale_languages
    )
  }

  public longitude<O extends LongitudeOptions>(
    options?: O
  ): LongitudeReturnType<O> {
    const format = options?.format ?? 'dd'

    if (format === 'ddm' || format === 'dms') {
      testRange(
        !!options?.min && (options?.min < 0 || options?.min > 89),
        'Chance: Min specified is out of range. Should be between 0 - 89'
      )
      testRange(
        !!options?.max && (options?.max < 0 || options?.max > 89),
        'Chance: Max specified is out of range. Should be between 0 - 89'
      )
      testRange(
        !!options?.fixed && options?.fixed > 4,
        'Chance: Fixed specified should be below or equal to 4'
      )
    }

    switch (format) {
      case 'ddm': {
        return (this.integer.integer({
          min: options?.min ?? 0,
          max: options?.max ?? 179,
        }) +
          '°' +
          floating({
            min: 0,
            max: 59,
            fixed: options?.fixed ?? 4,
          })) as LongitudeReturnType<O>
      }
      case 'dms': {
        return (this.integer.integer({
          min: options?.min ?? 0,
          max: options?.max ?? 179,
        }) +
          '°' +
          this.integer.integer({ min: 0, max: 59 }) +
          '’' +
          floating({ min: 0, max: 59, fixed: options?.fixed ?? 4 }) +
          '”') as LongitudeReturnType<O>
      }
      case 'dd':
      default: {
        return floating({
          min: options?.min ?? -180,
          max: options?.max ?? 180,
          fixed: options?.fixed ?? 5,
        }) as LongitudeReturnType<O>
      }
    }
  }

  public phone(options?: PhoneOptions): string {
    const formatted = options?.formatted ?? true
    const mobile = options?.mobile ?? false
    const exampleNumber = options?.exampleNumber ?? false
    const country = options?.country ?? 'us'
    let parens = options?.parens ?? false

    let numPick: { area: string; sections: Array<number> } | string
    const ukNum = function (parts: { area: string; sections: Array<number> }) {
      let section: string[] = []
      //fills the section part of the phone number with random numbers.
      parts.sections.forEach(function (n) {
        section.push(string({ pool: '0123456789', length: n }))
      })
      return parts.area + section.join(' ')
    }
    if (!options?.formatted) {
      parens = false
    }
    let phone
    switch (country) {
      case 'fr':
        if (!mobile) {
          numPick = this.picker.pickOne([
            // Valid zone and département codes.
            '01' +
              this.picker.pickOne([
                '30',
                '34',
                '39',
                '40',
                '41',
                '42',
                '43',
                '44',
                '45',
                '46',
                '47',
                '48',
                '49',
                '53',
                '55',
                '56',
                '58',
                '60',
                '64',
                '69',
                '70',
                '72',
                '73',
                '74',
                '75',
                '76',
                '77',
                '78',
                '79',
                '80',
                '81',
                '82',
                '83',
              ]) +
              string({ pool: '0123456789', length: 6 }),
            '02' +
              this.picker.pickOne([
                '14',
                '18',
                '22',
                '23',
                '28',
                '29',
                '30',
                '31',
                '32',
                '33',
                '34',
                '35',
                '36',
                '37',
                '38',
                '40',
                '41',
                '43',
                '44',
                '45',
                '46',
                '47',
                '48',
                '49',
                '50',
                '51',
                '52',
                '53',
                '54',
                '56',
                '57',
                '61',
                '62',
                '69',
                '72',
                '76',
                '77',
                '78',
                '85',
                '90',
                '96',
                '97',
                '98',
                '99',
              ]) +
              string({ pool: '0123456789', length: 6 }),
            '03' +
              this.picker.pickOne([
                '10',
                '20',
                '21',
                '22',
                '23',
                '24',
                '25',
                '26',
                '27',
                '28',
                '29',
                '39',
                '44',
                '45',
                '51',
                '52',
                '54',
                '55',
                '57',
                '58',
                '59',
                '60',
                '61',
                '62',
                '63',
                '64',
                '65',
                '66',
                '67',
                '68',
                '69',
                '70',
                '71',
                '72',
                '73',
                '80',
                '81',
                '82',
                '83',
                '84',
                '85',
                '86',
                '87',
                '88',
                '89',
                '90',
              ]) +
              string({ pool: '0123456789', length: 6 }),
            '04' +
              this.picker.pickOne([
                '11',
                '13',
                '15',
                '20',
                '22',
                '26',
                '27',
                '30',
                '32',
                '34',
                '37',
                '42',
                '43',
                '44',
                '50',
                '56',
                '57',
                '63',
                '66',
                '67',
                '68',
                '69',
                '70',
                '71',
                '72',
                '73',
                '74',
                '75',
                '76',
                '77',
                '78',
                '79',
                '80',
                '81',
                '82',
                '83',
                '84',
                '85',
                '86',
                '88',
                '89',
                '90',
                '91',
                '92',
                '93',
                '94',
                '95',
                '97',
                '98',
              ]) +
              string({ pool: '0123456789', length: 6 }),
            '05' +
              this.picker.pickOne([
                '08',
                '16',
                '17',
                '19',
                '24',
                '31',
                '32',
                '33',
                '34',
                '35',
                '40',
                '45',
                '46',
                '47',
                '49',
                '53',
                '55',
                '56',
                '57',
                '58',
                '59',
                '61',
                '62',
                '63',
                '64',
                '65',
                '67',
                '79',
                '81',
                '82',
                '86',
                '87',
                '90',
                '94',
              ]) +
              string({ pool: '0123456789', length: 6 }),
            '09' + string({ pool: '0123456789', length: 8 }),
          ])
          phone = formatted ? numPick : numPick
        } else {
          numPick =
            this.picker.pickOne(['06', '07']) +
            string({ pool: '0123456789', length: 8 })
          phone = formatted ? numPick : numPick
        }
        break
      case 'uk':
        if (!mobile) {
          numPick = this.picker.pickOne([
            //valid area codes of major cities/counties followed by random numbers in required format.

            {
              area: '01' + this.character.character({ pool: '234569' }) + '1 ',
              sections: [3, 4],
            },
            {
              area: '020 ' + this.character.character({ pool: '378' }),
              sections: [3, 4],
            },
            {
              area: '023 ' + this.character.character({ pool: '89' }),
              sections: [3, 4],
            },
            { area: '024 7', sections: [3, 4] },
            {
              area:
                '028 ' +
                this.picker.pickOne([
                  '25',
                  '28',
                  '37',
                  '71',
                  '82',
                  '90',
                  '92',
                  '95',
                ]),
              sections: [2, 4],
            },
            {
              area:
                '012' +
                this.picker.pickOne(['04', '08', '54', '76', '97', '98']) +
                ' ',
              sections: [6],
            },
            {
              area: '013' + this.picker.pickOne(['63', '64', '84', '86']) + ' ',
              sections: [6],
            },
            {
              area:
                '014' +
                this.picker.pickOne(['04', '20', '60', '61', '80', '88']) +
                ' ',
              sections: [6],
            },
            {
              area: '015' + this.picker.pickOne(['24', '27', '62', '66']) + ' ',
              sections: [6],
            },
            {
              area:
                '016' +
                this.picker.pickOne(['06', '29', '35', '47', '59', '95']) +
                ' ',
              sections: [6],
            },
            {
              area: '017' + this.picker.pickOne(['26', '44', '50', '68']) + ' ',
              sections: [6],
            },
            {
              area: '018' + this.picker.pickOne(['27', '37', '84', '97']) + ' ',
              sections: [6],
            },
            {
              area:
                '019' +
                this.picker.pickOne([
                  '00',
                  '05',
                  '35',
                  '46',
                  '49',
                  '63',
                  '95',
                ]) +
                ' ',
              sections: [6],
            },
          ])
          phone = formatted ? ukNum(numPick) : ukNum(numPick).replace(' ', '')
        } else {
          numPick = this.picker.pickOne([
            {
              area: '07' + this.picker.pickOne(['4', '5', '7', '8', '9']),
              sections: [2, 6],
            },
            { area: '07624 ', sections: [6] },
          ])
          phone = formatted ? ukNum(numPick) : ukNum(numPick).replace(/ /g, '')
        }
        break
      case 'za':
        if (!mobile) {
          numPick = this.picker.pickOne([
            '01' +
              this.picker.pickOne([
                '0',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
              ]) +
              string({ pool: '0123456789', length: 7 }),
            '02' +
              this.picker.pickOne(['1', '2', '3', '4', '7', '8']) +
              string({ pool: '0123456789', length: 7 }),
            '03' +
              this.picker.pickOne(['1', '2', '3', '5', '6', '9']) +
              string({ pool: '0123456789', length: 7 }),
            '04' +
              this.picker.pickOne([
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
              ]) +
              string({ pool: '0123456789', length: 7 }),
            '05' +
              this.picker.pickOne(['1', '3', '4', '6', '7', '8']) +
              string({ pool: '0123456789', length: 7 }),
          ])
          phone = formatted || numPick
        } else {
          numPick = this.picker.pickOne([
            '060' +
              this.picker.pickOne(['3', '4', '5', '6', '7', '8', '9']) +
              string({ pool: '0123456789', length: 6 }),
            '061' +
              this.picker.pickOne(['0', '1', '2', '3', '4', '5', '8']) +
              string({ pool: '0123456789', length: 6 }),
            '06' + string({ pool: '0123456789', length: 7 }),
            '071' +
              this.picker.pickOne([
                '0',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
              ]) +
              string({ pool: '0123456789', length: 6 }),
            '07' +
              this.picker.pickOne(['2', '3', '4', '6', '7', '8', '9']) +
              string({ pool: '0123456789', length: 7 }),
            '08' +
              this.picker.pickOne(['0', '1', '2', '3', '4', '5']) +
              string({ pool: '0123456789', length: 7 }),
          ])
          phone = formatted || numPick
        }
        break
      case 'us':
        const areacode = this.areacode({
          exampleNumber,
          parens,
          seed: options?.seed,
        })
        const exchange =
          this.naturalGenerator.natural({ min: 2, max: 9 }).toString() +
          this.naturalGenerator.natural({ min: 0, max: 9 }).toString() +
          this.naturalGenerator.natural({ min: 0, max: 9 }).toString()
        const subscriber = this.naturalGenerator
          .natural({ min: 1000, max: 9999 })
          .toString() // this could be random [0-9]{4}
        phone = formatted
          ? areacode + ' ' + exchange + '-' + subscriber
          : areacode + exchange + subscriber
        break
      case 'br':
        const areaCode = this.picker.pickOne([
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
          '19',
          '21',
          '22',
          '24',
          '27',
          '28',
          '31',
          '32',
          '33',
          '34',
          '35',
          '37',
          '38',
          '41',
          '42',
          '43',
          '44',
          '45',
          '46',
          '47',
          '48',
          '49',
          '51',
          '53',
          '54',
          '55',
          '61',
          '62',
          '63',
          '64',
          '65',
          '66',
          '67',
          '68',
          '69',
          '71',
          '73',
          '74',
          '75',
          '77',
          '79',
          '81',
          '82',
          '83',
          '84',
          '85',
          '86',
          '87',
          '88',
          '89',
          '91',
          '92',
          '93',
          '94',
          '95',
          '96',
          '97',
          '98',
          '99',
        ])
        let prefix
        if (mobile) {
          // Brasilian official reference (mobile): http://www.anatel.gov.br/setorregulado/plano-de-numeracao-brasileiro?id=330
          prefix = '9' + string({ pool: '0123456789', length: 4 })
        } else {
          // Brasilian official reference: http://www.anatel.gov.br/setorregulado/plano-de-numeracao-brasileiro?id=331
          prefix = this.naturalGenerator
            .natural({ min: 2000, max: 5999 })
            .toString()
        }
        let mcdu = string({ pool: '0123456789', length: 4 })
        phone = formatted
          ? '(' + areaCode + ') ' + prefix + '-' + mcdu
          : areaCode + prefix + mcdu
        break
    }
    return phone as string
  }

  public postal(_options?: PostalOptions): string {
    // Postal District
    var pd = this.character.character({ pool: 'XVTSRPNKLMHJGECBA' })
    // Forward Sortation Area (FSA)
    var fsa =
      pd +
      this.naturalGenerator.natural({ max: 9 }) +
      this.character.character({ alpha: true, casing: 'upper' })
    // Local Delivery Unit (LDU)
    var ldu =
      this.naturalGenerator.natural({ max: 9 }) +
      this.character.character({ alpha: true, casing: 'upper' }) +
      this.naturalGenerator.natural({ max: 9 })

    return fsa + ' ' + ldu
  }
  public postcode(_options?: PostcodeOptions): string {
    const area = this.picker.pickOne(postcodeAreas).code
    const district = this.naturalGenerator.natural({ max: 9 }) // Generates a random digit from 0 to 9 for the district
    const subDistrict = bool()
      ? this.character.character({ alpha: true, casing: 'upper' })
      : ''
    const outward = `${area}${district}${subDistrict}` // Concatenating area, district, and sub-district (if applicable)

    const sector = this.naturalGenerator.natural({ max: 9 }) // Generates a random digit from 0 to 9 for the sector
    const unit = `${this.character.character({ alpha: true, casing: 'upper' })}${this.character.character({ alpha: true, casing: 'upper' })}` // Generates two random uppercase letters for the unit
    const inward = `${sector}${unit}` // Concatenating sector and unit

    return `${outward} ${inward}` // Combining outward and inward parts with a space separator
  }
  public province(options?: ProvinceOptions): string {
    const province = this.picker.pickOne(provinces[options?.country ?? 'ca'])
    return options?.full ? province.name : province.abbreviation
  }
  public state<O extends StateOptions>(options?: O): StateReturnType<O> {
    let validStates: RawState[] = []
    const country = options?.country || 'us'

    if (options?.us_states_and_dc && country !== 'us') {
      validStates = validStates.concat(states.us)
    }
    if (options?.territories) {
      validStates = validStates.concat(states.us_territories)
    }
    if (options?.armed_forces) {
      validStates = validStates.concat(states.us_armed_forces)
    }

    validStates = validStates.concat(states[country])
    const state = this.picker.pickOne(validStates)
    return (
      options?.raw ? state : options?.full ? state.name : state.abbreviation
    ) as StateReturnType<O>
  }

  public counties(options: CountiesOptions = { country: 'uk' }): string {
    return this.picker.pickOne(countiesObject[options.country]).name
  }
  public street(options?: StreetOptions): string {
    let street = ''
    const country = options?.country ?? 'us'
    const syllables = options?.syllables ?? 2
    const suffix = this.street_suffix(country)

    switch (country) {
      case 'us':
        street = this.text.word({ syllables })
        street = capitalize(street)
        street += ' '
        street += options?.short_suffix ? suffix.abbreviation : suffix.name
        break
      case 'it':
        street = this.text.word({ syllables })
        street = capitalize(street)
        street =
          (options?.short_suffix ? suffix.abbreviation : suffix.name) +
          ' ' +
          street
        break
    }
    return street
  }

  private street_suffix(country: keyof typeof street_suffixes): StreetSuffix {
    return this.picker.pickOne(street_suffixes[country ?? 'us'])
  }

  public zip(options?: ZipOptions): string {
    let zip = n(
      () => this.naturalGenerator.natural({ max: 9 }).toString(),
      options?.plusfour ? 9 : 5
    ).join('')

    return options?.plusfour ? zip.slice(0, 5) + '-' + zip.slice(5) : zip
  }
}

function testRange(test: boolean, errorMessage: string | undefined) {
  if (test) {
    throw new RangeError(errorMessage)
  }
}
