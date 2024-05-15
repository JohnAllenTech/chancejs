import { FinanceOptions } from '../interfaces'

export interface ExpOptions extends FinanceOptions {
  min?: number
  max?: number
  raw?: boolean
}

export interface RawExp {
  month: string
  year: string
}

export type ExpReturnType<O extends ExpOptions> = O['raw'] extends true
  ? RawExp
  : string

export type ExpGeneratorFunction = <O extends ExpOptions>(
  /**
   * Returns a random exp.
   *
   * @param { ExpOptions} [options={}]
   * @return { ExpReturnType }
   * @example
   * // returns ExpReturnType
   * exp()
   */
  options?: O
) => ExpReturnType<O>
