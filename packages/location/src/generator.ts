import { Generator, GeneratorOptions, n } from '@chancejs/generator'
import { ILocation, LocationOptions } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'
import { ZipOptions } from './zip/interfaces'
import { countries } from './country/constants'
import { Picker } from '@chancejs/pick'
import { CountryOptions, CountryReturnType } from './country/interfaces'

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

  public areacode(options?: LocationOptions): string {
    return 'string'
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
  public state(options?: LocationOptions): string {
    return 'string'
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
