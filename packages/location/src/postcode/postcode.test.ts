import { times } from '@johnallentech/generator'
import { postcode } from './postcode'

describe('Testing location postcode function', () => {
  test('returns a valid basic postcode', () => {
    times(1000, () => {
      const result = postcode()
      expect(result).toMatch(/^[A-Z]{1,2}\d[A-Z\d]? \d[A-Z]{2}$/)
    })
  })
})
