import { times } from '@johnallentech/generator'
import { shuffle } from './shuffle'

describe('Testing Shuffle function', () => {
  it('returns a random shuffle', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    times(1000, () => {
      const result = shuffle(array)
      expect(Array.isArray(result)).toEqual(true)
      expect(typeof result[0]).toEqual('number')
    })
  })

  it('returns an array of the same length', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    times(1000, () => {
      const result = shuffle(array)
      expect(result.length).toEqual(array.length)
    })
  })

  it('contains the same elements', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    times(1000, () => {
      const result = shuffle(array)
      const resultSorted = result.slice().sort((a, b) => a - b)
      const arraySorted = array.slice().sort((a, b) => a - b)
      expect(resultSorted).toEqual(arraySorted)
    })
  })

  it('returns a differently ordered array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let identicalCount = 0
    times(1000, () => {
      const result = shuffle(array)
      if (result.join(',') === array.join(',')) {
        identicalCount++
      }
    })
    // Expect that not all of the shuffles result in the original order
    expect(identicalCount).toBeLessThan(1000)
  })

  it('handles empty arrays', () => {
    const array: number[] = []
    const result = shuffle(array)
    expect(result).toEqual([])
  })

  it('handles single-element arrays', () => {
    const array = [1]
    const result = shuffle(array)
    expect(result).toEqual([1])
  })

  it('preserves element types', () => {
    const stringArray = ['a', 'b', 'c', 'd']
    const numberArray = [1, 2, 3, 4]
    const objectArray = [{}, {}, {}, {}]

    times(1000, () => {
      const stringResult = shuffle(stringArray)
      const numberResult = shuffle(numberArray)
      const objectResult = shuffle(objectArray)

      expect(stringResult.every(item => typeof item === 'string')).toEqual(true)
      expect(numberResult.every(item => typeof item === 'number')).toEqual(true)
      expect(objectResult.every(item => typeof item === 'object')).toEqual(true)
    })
  })
})
