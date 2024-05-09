import { CountryGeneratorFunction } from './country/interfaces'

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
  depth: LocationGeneratorFunction
  geohash: LocationGeneratorFunction
  latitude: LocationGeneratorFunction
  locale: LocationGeneratorFunction
  longitude: LocationGeneratorFunction
  phone: LocationGeneratorFunction
  postal: LocationGeneratorFunction
  postcode: LocationGeneratorFunction
  province: LocationGeneratorFunction
  state: LocationGeneratorFunction
  street: LocationGeneratorFunction
  zip: LocationGeneratorFunction
}
