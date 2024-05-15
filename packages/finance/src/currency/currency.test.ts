import { times } from '@chancejs/generator'
import { currencies } from './constants'
import { currency } from './currency'

describe('Testing finance currency function', () => {
  it('returns a currency', () => {
    times(1000, () => {
      const result = currency()
      expect(typeof result).toBe('object')
      expect(typeof result.code).toBe('string')
      expect(result.code.length).toBe(3)
      expect(typeof result.name).toBe('string')
      expect(currencies.includes(result)).toBe(true)
    })
  })
})
