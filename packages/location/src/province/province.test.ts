import { times } from '@chancejs/generator'
import { province } from './province'
import { provinces } from './constants'

describe('Testing Province Province function', () => {
  // province()
  test('province() returns a random (short) province name', () => {
    times(1000, () => {
      const result = province()
      expect(result).toHaveLength(2)
      expect(typeof result).toBe('string')
    })
  })

  test('province() can return a long random province name', () => {
    const canadianStateNames = provinces.ca.map(province => province.name)
    times(1000, () => {
      const result = province({ full: true })
      expect(typeof result).toBe('string')
      expect(result.length).toBeGreaterThan(2)
      expect(canadianStateNames.includes(result)).toBe(true)
    })
  })

  test('province() can return a random long "it" province', () => {
    const italianStateNames = provinces.it.map(province => province.name)
    times(1000, () => {
      const result = province({ country: 'it', full: true })
      expect(result.length).toBeGreaterThan(2)
      expect(italianStateNames.includes(result)).toBe(true)
    })
  })
})
