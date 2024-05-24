import { Generator, GeneratorOptions } from '@chancejs/generator'
import { StringGenerator } from '@chancejs/string'
import { NaturalGenerator } from '@chancejs/natural'
import { WeightedOptions } from './weighted'

export class Utils extends Generator {
  private string: StringGenerator
  private natural: NaturalGenerator

  constructor(options: GeneratorOptions) {
    super(options)
    this.string = new StringGenerator(options)
    this.natural = new NaturalGenerator(options)
  }

  public hash = (options?: { length?: number; casing?: 'lower' | 'upper' }) => {
    const HEX_POOL = '0123456789abcdef'
    return this.string.string({
      pool: options?.casing === 'upper' ? HEX_POOL.toUpperCase() : HEX_POOL,
      length: options?.length,
    })
  }

  public base64 = (input: string): string => {
    if (typeof btoa === 'function') {
      return btoa(input)
    } else if (
      typeof Buffer !== 'undefined' &&
      typeof Buffer.from === 'function'
    ) {
      return Buffer.from(input).toString('base64')
    } else {
      throw new Error('No Base64 encoder available.')
    }
  }

  public guid = (version: number = 5): string => {
    const guidPool = 'abcdef1234567890'
    const variantPool = 'ab89'

    const guid =
      `${this.string.string({ pool: guidPool, length: 8 })}-` +
      `${this.string.string({ pool: guidPool, length: 4 })}-` +
      // The Version
      `${version}` +
      `${this.string.string({ pool: guidPool, length: 3 })}-` +
      // The Variant
      `${this.string.string({ pool: variantPool, length: 1 })}` +
      `${this.string.string({ pool: guidPool, length: 3 })}-` +
      `${this.string.string({ pool: guidPool, length: 12 })}`

    return guid
  }

  public pad = (number: number, width: number, pad = '0') => {
    const numStr = number.toString()
    return numStr.length >= width
      ? numStr
      : pad.repeat(width - numStr.length) + numStr
  }

  // TODO remove any and properly type the return of this
  public shuffle = <T>(arr: T[]): T[] => {
    const newArray = []
    let length = arr.length
    const sourceIndexes = Array.from({ length }, (_, i) => i)
    let lastSourceIndex = length - 1

    for (let i = 0; i < length; i++) {
      const selectedSourceIndex = this.natural.natural({ max: lastSourceIndex })
      const j = sourceIndexes[selectedSourceIndex]

      newArray[i] = arr[j]

      sourceIndexes[selectedSourceIndex] = sourceIndexes[lastSourceIndex]
      lastSourceIndex -= 1
    }

    return newArray
  }

  x = this.shuffle(['1', '2'])

  // TODO remove any and properly type the return of this
  public weighted = (options: WeightedOptions): any => {
    if (options.arr.length !== options.weights.length) {
      throw new RangeError('Chance: Length of array and weights must match')
    }

    // Scan weights array and sum valid entries
    let sum = options.weights.reduce((acc: any, val: number) => {
      if (isNaN(val)) {
        throw new RangeError('Chance: All weights must be numbers')
      }
      return val > 0 ? acc + val : acc
    }, 0)

    if (sum === 0) {
      throw new RangeError('Chance: No valid entries in array weights')
    }

    // Select a value within range
    let selected = this.natural.natural({ min: 0, max: sum })

    // Find array entry corresponding to selected value
    let total = 0
    let lastGoodIdx = -1
    let chosenIdx = options.weights.findIndex(
      (val: number, weightIndex: number) => {
        total += val
        if (val > 0) {
          if (selected <= total) {
            return true
          }
          lastGoodIdx = weightIndex
        }
        return weightIndex === options.weights.length - 1
      }
    )

    if (chosenIdx === -1) {
      chosenIdx = lastGoodIdx
    }

    const chosen = options.arr[chosenIdx]
    if (options.trim) {
      options.arr.splice(chosenIdx, 1)
      options.weights.splice(chosenIdx, 1)
    }

    return chosen
  }
}
