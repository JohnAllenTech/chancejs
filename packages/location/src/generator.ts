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

export class Location extends Generator implements ILocation {
  private naturalGenerator: NaturalGenerator
  private picker: Picker
  private text: Text
  private character: CharacterGenerator

  constructor(options: GeneratorOptions) {
    super(options)
    this.naturalGenerator = new NaturalGenerator(options)
    this.picker = new Picker(options)
    this.text = new Text(options)
    this.character = new CharacterGenerator(options)
  }

  public address(options?: LocationOptions): string {
    return 'string'
  }

  public altitude(options?: AltitudeOptions): number {
    const min = options?.min ?? 0
    const max = options?.max ?? 8848
    const fixed = options?.fixed ?? 5

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
  public coordinates(options?: LocationOptions): string {
    return 'string'
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
  public geohash(options?: LocationOptions): string {
    return 'string'
  }
  public latitude(options?: LocationOptions): string {
    return 'string'
  }
  public locale(options?: LocationOptions): string {
    return 'string'
  }
  public longitude(options?: LocationOptions): string {
    return 'string'
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
  public street(options?: LocationOptions): string {
    return 'string'
  }
  public zip(options?: ZipOptions): string {
    let zip = n(
      () => this.naturalGenerator.natural({ max: 9 }).toString(),
      options?.plusfour ? 9 : 5
    ).join('')

    return options?.plusfour ? zip.slice(0, 5) + '-' + zip.slice(5) : zip
  }
}
