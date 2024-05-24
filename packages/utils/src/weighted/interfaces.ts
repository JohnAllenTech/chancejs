import { GeneratorOptions } from '@chancejs/generator'

export interface WeightedOptions {
  arr: Array<any>
  weights: Array<number>
  trim?: boolean
}

export type WeightedGeneratorFunction = (
  /**
   * returns a random elem based on a weighted criteria.
   *
   * @param { WeightedOptions} [options={}]
   * @return { 0 }
   * @example
   * // returns O
   * weighted()
   */
  options: WeightedOptions
) => any
