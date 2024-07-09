import { times } from '@johnallentech/generator'
import { euro } from './euro' // Ensure the correct import path

describe('Testing Euro function', () => {
  it('should return a proper euro amount', () => {
    times(1000, () => {
      const result = euro()
      expect(/[0-9]+,?[0-9]*€/.test(result)).toBe(true)
      const euroFloat = parseFloat(result.slice(0, -1).replace(',', '.'))
      expect(euroFloat).toBeLessThan(10001)
    })
  })

  it('should obey min and max, if provided', () => {
    times(1000, () => {
      const result = euro({ max: 20 })
      const euroFloat = parseFloat(result.slice(0, -1).replace(',', '.'))
      expect(euroFloat).toBeLessThanOrEqual(20)
    })

    times(1000, () => {
      const result = euro({ min: 20 })
      const euroFloat = parseFloat(result.slice(0, -1).replace(',', '.'))
      expect(euroFloat).toBeGreaterThanOrEqual(20)
    })
  })

  it('should take negative min and max', () => {
    times(1000, () => {
      const result = euro({ min: -200, max: -1 })
      expect(result.charAt(0)).toBe('-')
      let euroFloat = parseFloat(result.slice(1, -1).replace(',', '.'))
      euroFloat *= -1 // Adjust for negative value
      expect(euroFloat).toBeLessThanOrEqual(-1)
      expect(euroFloat).toBeGreaterThanOrEqual(-200)
    })
  })
})
