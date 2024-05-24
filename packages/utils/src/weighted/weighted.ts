import { Utils } from '../generator'
import { WeightedGeneratorFunction } from './interfaces'

export const weighted: WeightedGeneratorFunction = options => {
  const utils = new Utils({})
  return utils.weighted(options)
}
