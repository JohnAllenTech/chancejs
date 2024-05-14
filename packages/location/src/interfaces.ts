import { AddressGeneratorFunction } from './address/interfaces'
import { AltitudeGeneratorFunction } from './altitude/interfaces'
import { AreacodeGeneratorFunction } from './areacode/interfaces'
import { CityGeneratorFunction } from './city/interfaces'
import { CoordinatesGeneratorFunction } from './coordinates/interfaces'
import { CountiesGeneratorFunction } from './counties'
import { CountryGeneratorFunction } from './country/interfaces'
import { DepthGeneratorFunction } from './depth/interfaces'
import { GeohashGeneratorFunction } from './geohash/interfaces'
import { LatitudeGeneratorFunction } from './latitude/interfaces'
import { LocaleGeneratorFunction } from './locale/interfaces'
import { LongitudeGeneratorFunction } from './longitude/interfaces'
import { PhoneGeneratorFunction } from './phone/interfaces'
import { PostalGeneratorFunction } from './postal/interfaces'
import { PostcodeGeneratorFunction } from './postcode/interfaces'
import { ProvinceGeneratorFunction } from './province/interfaces'
import { StateGeneratorFunction } from './state/interfaces'
import { StreetGeneratorFunction } from './street/interfaces'
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
  address: AddressGeneratorFunction
  altitude: AltitudeGeneratorFunction
  areacode: AreacodeGeneratorFunction
  city: CityGeneratorFunction
  coordinates: CoordinatesGeneratorFunction
  country: CountryGeneratorFunction
  counties: CountiesGeneratorFunction
  depth: DepthGeneratorFunction
  geohash: GeohashGeneratorFunction
  latitude: LatitudeGeneratorFunction
  locale: LocaleGeneratorFunction
  longitude: LongitudeGeneratorFunction
  phone: PhoneGeneratorFunction
  postal: PostalGeneratorFunction
  postcode: PostcodeGeneratorFunction
  province: ProvinceGeneratorFunction
  state: StateGeneratorFunction
  street: StreetGeneratorFunction
  zip: ZipGeneratorFunction
}
