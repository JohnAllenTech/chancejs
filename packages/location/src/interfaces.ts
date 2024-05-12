import { AltitudeGeneratorFunction } from './altitude/interfaces'
import { AreacodeGeneratorFunction } from './areacode/interfaces'
import { CityGeneratorFunction } from './city/interfaces'
import { CountiesGeneratorFunction } from './counties'
import { CountryGeneratorFunction } from './country/interfaces'
import { DepthGeneratorFunction } from './depth/interfaces'
import { LatitudeGeneratorFunction } from './latitude/interfaces'
import { LongitudeGeneratorFunction } from './longitude/interfaces'
import { PostalGeneratorFunction } from './postal/interfaces'
import { StateGeneratorFunction } from './state/interfaces'
import { ZipGeneratorFunction } from './zip/interfaces'

export interface LocationOptions {
  seed?: number
}

export interface LocationGeneratorFunction {
  /**
   * returns random location based data.
   *
   * @param { LocationOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * location()
   */
  (options?: LocationOptions): string
}

export interface ILocation {
  address: LocationGeneratorFunction
  altitude: AltitudeGeneratorFunction
  areacode: AreacodeGeneratorFunction
  city: CityGeneratorFunction
  coordinates: LocationGeneratorFunction
  country: CountryGeneratorFunction
  counties: CountiesGeneratorFunction
  depth: DepthGeneratorFunction
  geohash: LocationGeneratorFunction
  latitude: LatitudeGeneratorFunction
  locale: LocationGeneratorFunction
  longitude: LongitudeGeneratorFunction
  phone: LocationGeneratorFunction
  postal: PostalGeneratorFunction
  postcode: LocationGeneratorFunction
  province: LocationGeneratorFunction
  state: StateGeneratorFunction
  street: LocationGeneratorFunction
  zip: ZipGeneratorFunction
}
