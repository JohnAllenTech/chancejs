import { Generator, GeneratorOptions, n, capitalize } from '@chancejs/generator'
import { ILocation, LocationOptions } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'
import { floating } from '@chancejs/floating'
import { Text } from '@chancejs/text'
import { ZipOptions } from './zip/interfaces'
import { countries } from './country/constants'
import { Picker } from '@chancejs/pick'
import { CountryOptions, CountryReturnType } from './country/interfaces'
import { CountiesOptions } from './counties'
import { countiesObject } from './counties'
import { RawState, StateOptions, StateReturnType } from './state/interfaces'
import { states } from './state/constants'
import { AreacodeOptions } from './areacode/interfaces'
import { AltitudeOptions } from './altitude/interfaces'
import { DepthOptions } from './depth/interfaces'
import { CharacterGenerator } from '@chancejs/character'
import { PostalOptions } from './postal/interfaces'
import { LatitudeOptions, LatitudeReturnType } from './latitude/interfaces'
import { IntegerGenerator } from '@chancejs/integer'
import { LongitudeOptions, LongitudeReturnType } from './longitude/interfaces'
import { CoordinatesOptions } from './coordinates/interfaces'
import { GeohashOptions } from './geohash/interfaces'
import { string } from '@chancejs/string'
import { StreetOptions, StreetSuffix } from './street/interfaces'
import { street_suffixes } from './street/constants'

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

  public address(options?: LocationOptions): string {
    return 'string'
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
  public locale(options?: LocationOptions): string {
    return 'string'
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
  public phone(options?: LocationOptions): string {
    return 'string'
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
  public postcode(options?: LocationOptions): string {
    return 'string'
  }
  public province(options?: LocationOptions): string {
    return 'string'
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

  public street2(options?: StreetOptions): string {
    const country = options?.country ?? 'us'
    const syllables = options?.syllables ?? 2
    const suffix = this.street_suffix(country)
    let street: string

    switch (country) {
      case 'us':
      case 'it':
        street = capitalize(this.text.word({ syllables }))
        street +=
          ' ' + (options?.short_suffix ? suffix.abbreviation : suffix.name)
        break
      default:
        street = ''
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
