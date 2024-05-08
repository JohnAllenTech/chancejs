import { LocationOptions } from '../interfaces'

export interface ZipOptions extends LocationOptions {
  sampleOption: string
}

export interface ZipGeneratorFunction {
  /**
   * Returns a random zip.
   *
   * @param { ZipOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * zip()
   */
  (options?: ZipOptions): string
}
