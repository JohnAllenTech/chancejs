import { times } from '@chancejs/generator'
import { dollar } from './dollar'

describe('Testing Dollar Dollar function', () => {
  it('should return a proper dollar amount', () => {
    const result = dollar()
    expect(/\$[0-9]+\.[0-9]+/.test(result)).toBe(true)
    const dollarFloat = parseFloat(result.substring(1, result.length))
    expect(dollarFloat).toBeLessThan(10001)
  })

  it('should obey min and max, if provided', () => {
    times(1000, () => {
      const result = dollar({ max: 20 })
      const dollarFloat = parseFloat(result.substring(1, result.length))
      expect(dollarFloat).toBeLessThanOrEqual(20)
    })

    times(1000, () => {
      const result = dollar({ min: 20 })
      const dollarFloat = parseFloat(result.substring(1, result.length))
      expect(dollarFloat).toBeGreaterThanOrEqual(20)
    })
  })

  it('should take negative min and max', () => {
    times(1000, () => {
      const result = dollar({ min: -200, max: -1 })
      expect(result.charAt(0)).toBe('-')
      let dollarFloat = parseFloat(result.substring(2, result.length))
      dollarFloat *= -1 // This is necessary because we strip the - when parsing
      expect(dollarFloat).toBeLessThanOrEqual(-1)
      expect(dollarFloat).toBeGreaterThanOrEqual(-200)
    })
  })
})
