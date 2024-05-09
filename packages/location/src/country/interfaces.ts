import { LocationOptions } from '../interfaces'

export interface CountryGeneratorFunction {
  /**
   * Returns a random country.
   *
   * @param { CountryOptions} [options={}]
   * @return { string | RawCountry }
   * @example
   * // returns string
   * country()
   */
  <O extends CountryOptions>(options?: O): CountryReturnType<O>
}

export interface CountryOptions extends LocationOptions {
  raw?: boolean
  full?: boolean
}

export interface RawCountry {
  name: string
  abbreviation: string
}

export type CountryReturnType<O extends CountryOptions> = O['raw'] extends true
  ? RawCountry
  : string
