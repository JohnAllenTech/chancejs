import { times } from '@chancejs/generator'
import { weighted } from './weighted'

describe('Testing Weighted Weighted function', () => {
  it('returns an random weighted number', () => {
    times(1000, () => {
      const result = weighted({ arr: [1, 2, 3], weights: [10, 20, 70] })
      expect(typeof result).toEqual('number')
    })
  })

  it('returns an random weighted string', () => {
    let ones = 0
    let twos = 0
    let threes = 0

    times(100000, () => {
      const result = weighted({ arr: ['1', '2', '3'], weights: [33, 33, 33] })
      if (result === '1') ones += 1
      if (result === '2') twos += 1
      if (result === '3') threes += 1
      expect(typeof result).toEqual('string')
    })
    console.log(ones, twos, threes)
  })
})
