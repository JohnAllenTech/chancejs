import { times } from '@johnallentech/generator'
import { country } from './country'

describe('Testing country and county functions', () => {
  it('returns a random (short) country name', () => {
    times(1000, () => {
      const shortCountry = country()
      expect(typeof shortCountry).toEqual('string')
      expect(shortCountry.length).toEqual(2)
    })
  })

  it('returns a random (long) country name', () => {
    times(1000, () => {
      const longCountry = country({ full: true })
      expect(typeof longCountry).toEqual('string')
      expect(longCountry.length).toBeGreaterThan(2)
    })
  })

  it('returns a random (raw) country name', () => {
    times(1000, () => {
      const longCountry = country({ raw: true })
      expect(typeof longCountry).toEqual('object')
      expect(longCountry.abbreviation).toBeDefined()
      expect(longCountry.abbreviation.length).toEqual(2)
      expect(longCountry.name).toBeDefined()
    })
  })
})
