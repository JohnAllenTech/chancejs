import { Utils } from '../generator'

export const shuffle = <T>(arr: Array<T>, seed?: number): Array<T> => {
  const utils = new Utils({ seed })
  return utils.shuffle(arr)
}
