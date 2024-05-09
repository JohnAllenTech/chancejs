import { CountiesGeneratorFunction } from './counties'
import { CountryGeneratorFunction } from './country/interfaces'
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
  altitude: LocationGeneratorFunction
  areacode: LocationGeneratorFunction
  city: LocationGeneratorFunction
  coordinates: LocationGeneratorFunction
  country: CountryGeneratorFunction
  counties: CountiesGeneratorFunction
  depth: LocationGeneratorFunction
  geohash: LocationGeneratorFunction
  latitude: LocationGeneratorFunction
  locale: LocationGeneratorFunction
  longitude: LocationGeneratorFunction
  phone: LocationGeneratorFunction
  postal: LocationGeneratorFunction
  postcode: LocationGeneratorFunction
  province: LocationGeneratorFunction
  state: StateGeneratorFunction
  street: LocationGeneratorFunction
  zip: ZipGeneratorFunction
}
