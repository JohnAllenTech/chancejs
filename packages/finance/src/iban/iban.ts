import { Finance } from '../generator'
import { IbanGeneratorFunction } from './interfaces'
import { IbanOptions } from './interfaces'

export const iban: IbanGeneratorFunction = (options?: IbanOptions) => {
  const finance = new Finance({ seed: options?.seed })
  return finance.iban()
}
