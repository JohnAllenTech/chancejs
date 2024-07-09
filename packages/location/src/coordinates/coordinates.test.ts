import { times } from '@johnallentech/generator'
import { coordinates } from './coordinates'

describe('Testing coordinates function', () => {
  test('coordinates() looks right', () => {
    times(1000, () => {
      let result = coordinates()
      expect(typeof result).toBe('string')
      expect(result.split(',').length).toBe(2)
    })
  })

  test('coordinates() returns coordinates in DD format as default', () => {
    times(1000, () => {
      const CHARS_NOT_TO_CONTAIN = ['°', '’', '”']

      let result = coordinates()
      let [latitude, longitude] = result.split(',')

      expect(typeof result).toBe('string')
      expect(result.split(',').length).toBe(2)
      expect(CHARS_NOT_TO_CONTAIN.every(char => !latitude.includes(char))).toBe(
        true
      )
      expect(
        CHARS_NOT_TO_CONTAIN.every(char => !longitude.includes(char))
      ).toBe(true)
    })
  })

  test('coordinates() will obey DD format', () => {
    times(1000, () => {
      const CHARS_NOT_TO_CONTAIN = ['°', '’', '”']

      let result = coordinates({ format: 'dd' })
      let [latitude, longitude] = result.split(',')

      expect(typeof result).toBe('string')
      expect(result.split(',').length).toBe(2)
      expect(CHARS_NOT_TO_CONTAIN.every(char => !latitude.includes(char))).toBe(
        true
      )
      expect(
        CHARS_NOT_TO_CONTAIN.every(char => !longitude.includes(char))
      ).toBe(true)
    })
  })

  test('coordinates() will obey DDM format', () => {
    times(1000, () => {
      const CHARS_TO_CONTAIN = ['°']
      const CHARS_NOT_TO_CONTAIN = ['’', '”']

      let result = coordinates({ format: 'ddm' })
      let [latitude, longitude] = result.split(',')

      expect(typeof result).toBe('string')
      expect(result.split(',').length).toBe(2)
      expect(CHARS_TO_CONTAIN.every(char => latitude.includes(char))).toBe(true)
      expect(CHARS_TO_CONTAIN.every(char => longitude.includes(char))).toBe(
        true
      )
      expect(CHARS_NOT_TO_CONTAIN.every(char => !latitude.includes(char))).toBe(
        true
      )
      expect(
        CHARS_NOT_TO_CONTAIN.every(char => !longitude.includes(char))
      ).toBe(true)
    })
  })

  test('coordinates() will obey DMS format', () => {
    times(1000, () => {
      const CHARS_TO_CONTAIN = ['°', '’', '”']

      let result = coordinates({ format: 'dms' })
      let [latitude, longitude] = result.split(',')

      expect(typeof result).toBe('string')
      expect(result.split(',').length).toBe(2)
      expect(CHARS_TO_CONTAIN.every(char => latitude.includes(char))).toBe(true)
      expect(CHARS_TO_CONTAIN.every(char => longitude.includes(char))).toBe(
        true
      )
    })
  })
})
