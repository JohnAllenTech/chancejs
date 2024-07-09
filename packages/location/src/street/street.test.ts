import { times } from '@chancejs/generator'
import { street } from './street'
import { street_suffixes } from './constants'

describe('Testing street function', () => {
  test('street() defaults to us street suffixes', () => {
    const americanStreetSuffixes = street_suffixes.us.map(suffix => suffix.name)
    times(1000, () => {
      const result = street()
      expect(typeof result).toBe('string')
      const [suffix, name] = result.split(' ')
      expect(typeof result).toBe('string')
      expect(typeof suffix).toBe('string')
      expect(typeof name).toBe('string')
      expect(americanStreetSuffixes.includes(name)).toBe(true)
    })
  })

  test('street() works with italy as country', () => {
    const italianStreetSuffixes = street_suffixes.it.map(suffix => suffix.name)
    times(1000, () => {
      const result = street({ country: 'it' })
      const [first, second, third] = result.split(' ')
      expect(typeof result).toBe('string')
      expect(typeof first).toBe('string')
      expect(typeof second).toBe('string')
      // Some italian suffixes have two words. By checking for the existence of a third word we know if the suffix has two
      expect(
        italianStreetSuffixes.includes(third ? first + ' ' + second : first)
      ).toBe(true)
    })
  })
})
