import { times } from '@chancejs/generator'
import { exp } from './exp' // Ensure correct import

describe('Testing exp_month and exp_year functions', () => {
  test('exp() looks correct', () => {
    times(1000, () => {
      const expiration = exp()
      expect(typeof expiration).toBe('string')
      expect(expiration.length).toBe(7)
      expect(/([0-9]{2})\/([0-9]{4})/.test(expiration)).toBe(true)
    })
  })

  test('exp() will respect object argument', () => {
    times(1000, () => {
      const expiration = exp({ raw: true })
      expect(typeof expiration).toBe('object')
      expect(expiration.month).toBeTruthy()
      expect(typeof expiration.month).toBe('string')
      expect(expiration.year).toBeTruthy()
      expect(typeof expiration.year).toBe('string')
    })
  })

  test('exp() returns a valid credit card expiration (in a future date)', () => {
    times(1000, () => {
      const expiration = exp({ raw: true })
      const now = new Date()
      const nowMonth = now.getMonth() + 1
      const nowYear = now.getFullYear()
      const expMonth = parseInt(expiration.month, 10)
      const expYear = parseInt(expiration.year, 10)

      expect(expYear).toBeGreaterThanOrEqual(nowYear)
      if (expYear === nowYear) {
        expect(expMonth).toBeGreaterThanOrEqual(nowMonth)
      }
    })
  })
})
