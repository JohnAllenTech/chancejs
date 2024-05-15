import { FinanceOptions } from '../interfaces'

export interface CcTypeOptions extends FinanceOptions {
  name?: string
  raw?: boolean
}

export interface RawCCType {
  name: string
  short_name: string
  prefix: string
  length: number
}

export type CCTypeReturnType<O extends CcTypeOptions> = O['raw'] extends true
  ? RawCCType
  : string

export type CcTypeGeneratorFunction = <O extends CcTypeOptions>(
  /**
   * Returns a random cc_type.
   *
   * @param { CcTypeOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * cc_type()
   */
  options?: O
) => CCTypeReturnType<O>
