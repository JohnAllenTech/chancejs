import { Utils } from '../generator'

export const weighted = <T>(
  arr: Array<T>,
  weights: Array<number>,
  trim?: boolean,
  seed?: number
) => {
  const utils = new Utils({ seed })
  return utils.weighted(arr, weights, trim)
}
