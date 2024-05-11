import { Generator, GeneratorOptions, n } from '@chancejs/generator'
import { ILocation, LocationOptions } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'
import { ZipOptions } from './zip/interfaces'
import { countries } from './country/constants'
import { Picker } from '@chancejs/pick'
import { CountryOptions, CountryReturnType } from './country/interfaces'
import { CountiesOptions } from './counties'
import { countiesObject } from './counties'
import { RawState, StateOptions, StateReturnType } from './state/interfaces'
import { states } from './state/constants'
import { AreacodeOptions } from './areacode/interfaces'

export class Location extends Generator implements ILocation {
  private naturalGenerator: NaturalGenerator
  private picker: Picker

  constructor(options: GeneratorOptions) {
    super(options)
    this.naturalGenerator = new NaturalGenerator(options)
    this.picker = new Picker(options)
  }

  public address(options?: LocationOptions): string {
    return 'string'
  }

  public altitude(options?: LocationOptions): string {
    return 'string'
  }

  public areacode(options: AreacodeOptions = { parens: true }): string {
    var areacode = options?.exampleNumber
      ? '555'
      : this.naturalGenerator.natural({ min: 2, max: 9 }).toString() +
        this.naturalGenerator.natural({ min: 0, max: 8 }).toString() +
        this.naturalGenerator.natural({ min: 0, max: 9 }).toString()

    return options.parens ? '(' + areacode + ')' : areacode
  }

  public city(options?: LocationOptions): string {
    return 'string'
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
  public depth(options?: LocationOptions): string {
    return 'string'
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
  public postal(options?: LocationOptions): string {
    return 'string'
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
