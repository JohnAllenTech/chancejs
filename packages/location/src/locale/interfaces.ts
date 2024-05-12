import { LocationOptions } from '../interfaces'

export interface LocaleOptions extends LocationOptions {
  region?: boolean
}

export interface LocaleGeneratorFunction {
  /**
   * Returns a random ISO-639-1 language code or IETF region code.
   *
   * @param { LocaleOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * locale()
   */
  (options?: LocaleOptions): string
}
