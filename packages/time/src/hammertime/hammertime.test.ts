import { times } from '@chancejs/generator'
import { hammertime } from './hammertime'

describe('Testing Time Hammertime function', () => {
  it('returns an random hammertime', () => {
    times(1000, () => {
      const result = hammertime()
      expect(typeof result).toEqual('number')
      expect(result).toBeGreaterThan(0)
      expect(result).toBeLessThan(8640000000000000)
    })
  })
})
