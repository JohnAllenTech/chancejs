import { times } from '@chancejs/generator'
import { address } from './address'

describe('Testing location address function', () => {
  test('returns a string', () => {
    times(1000, () => {
      const result = address()
      expect(typeof result).toBe('string')
    })
  })

  test('starts with a number', () => {
    times(1000, () => {
      const result = address()
      expect(/^\d+/.test(result)).toBe(true)
    })
  })

  test('can take a short_suffix arg and obey it', () => {
    times(1000, () => {
      const result = address({ short_suffix: true })
      const thirdPartLength = result.split(' ')[2].length
      expect(thirdPartLength).toBeLessThan(5)
    })
  })
})
