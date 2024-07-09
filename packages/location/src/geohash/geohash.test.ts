import { times } from '@johnallentech/generator'
import { geohash } from './geohash'
import { integer } from '@johnallentech/integer'

describe('Testing geohash function', () => {
  test('geohash() looks right', () => {
    times(1000, () => {
      let result = geohash()
      expect(typeof result).toBe('string')
      expect(result.length).toBe(7)
    })
  })

  test('geohash() will accept a length and obey it', () => {
    times(1000, () => {
      let length = integer({ min: 1, max: 10 })
      let result = geohash({ length: length })
      expect(result.length).toBe(length)
    })
  })

  test('geohash() handles minimal length of 1', () => {
    const result = geohash({ length: 1 })
    expect(typeof result).toBe('string')
    expect(result.length).toBe(1)
  })

  test('geohash() handles maximal length of 12', () => {
    const result = geohash({ length: 12 })
    expect(typeof result).toBe('string')
    expect(result.length).toBe(12)
  })
})
