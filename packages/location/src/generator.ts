import { Generator, GeneratorOptions } from '@chancejs/generator'
import { ILocation, LocationOptions } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'

export class Location extends Generator implements ILocation {
  private naturalGenerator: NaturalGenerator

  constructor(options: GeneratorOptions) {
    super(options)
    this.naturalGenerator = new NaturalGenerator(options)
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
  public country(options?: LocationOptions): string {
    return 'string'
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
  public zip(options?: LocationOptions): string {
    // var zip = this.n(this.naturalGenerator.natural, 5, { max: 9 })

    // if (options && options?.plusfour === true) {
    //   zip.push('-')
    //   zip = zip.concat(this.n(this.naturalGenerator.natural, 4, { max: 9 }))
    // }

    // return zip.join('')
    return 'string'
  }
}
