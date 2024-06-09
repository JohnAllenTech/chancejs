import { WebOptions } from '../interfaces'

export interface SemverOptions extends WebOptions {
  include_prerelease?: boolean
  range?: '^' | '~' | '<' | '>' | '<=' | '>=' | '='
}

export interface SemverGeneratorFunction {
  /**
   * returns a random semantic version.
   *
   * @param { SemverOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * semver()
   */
  (options?: SemverOptions): string
}
