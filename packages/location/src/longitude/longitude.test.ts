import { floating } from '@johnallentech/floating'
import { longitude } from './longitude'

describe('Testing longitude function', () => {
  test('longitude() returns a number', () => {
    const result = longitude()
    expect(typeof result).toBe('number')
  })

  test('longitude() is in the right range', () => {
    for (let i = 0; i < 1000; i++) {
      const longitudeValue = longitude()
      expect(longitudeValue).toBeGreaterThanOrEqual(-180)
      expect(longitudeValue).toBeLessThanOrEqual(180)
    }
  })

  test('longitude() will accept a min and obey it', () => {
    for (let i = 0; i < 1000; i++) {
      const min = floating({ min: -180, max: 180 })
      const longitudeValue = longitude({ min: min })
      expect(longitudeValue).toBeGreaterThanOrEqual(min)
      expect(longitudeValue).toBeLessThanOrEqual(180)
    }
  })

  test('longitude() will accept a max and obey it', () => {
    for (let i = 0; i < 1000; i++) {
      const max = floating({ min: -180, max: 180 })
      const longitudeValue = longitude({ max: max })
      expect(longitudeValue).toBeGreaterThanOrEqual(-180)
      expect(longitudeValue).toBeLessThanOrEqual(max)
    }
  })

  test('longitude() returns longitude in DD format as default', () => {
    for (let i = 0; i < 1000; i++) {
      const CHARS_NOT_TO_CONTAIN = ['°', '’', '”']
      const longitudeValue = longitude()

      expect(typeof longitudeValue).toBe('number')
      expect(
        CHARS_NOT_TO_CONTAIN.every(
          char => !longitudeValue.toString().includes(char)
        )
      ).toBe(true)
    }
  })

  test('longitude() will obey DD format', () => {
    for (let i = 0; i < 1000; i++) {
      const CHARS_NOT_TO_CONTAIN = ['°', '’', '”']
      const longitudeValue = longitude({ format: 'dd' })

      expect(typeof longitudeValue).toBe('number')
      expect(
        CHARS_NOT_TO_CONTAIN.every(
          char => !longitudeValue.toString().includes(char)
        )
      ).toBe(true)
    }
  })

  test('longitude() will obey DDM format', () => {
    for (let i = 0; i < 1000; i++) {
      const CHARS_TO_CONTAIN = ['°']
      const CHARS_NOT_TO_CONTAIN = ['’', '”']
      const longitudeValue = longitude({ format: 'ddm' })

      expect(typeof longitudeValue).toBe('string')
      expect(
        CHARS_TO_CONTAIN.every(char => longitudeValue.includes(char))
      ).toBe(true)
      expect(
        CHARS_NOT_TO_CONTAIN.every(char => !longitudeValue.includes(char))
      ).toBe(true)
    }
  })

  test('longitude() will obey DMS format', () => {
    for (let i = 0; i < 1000; i++) {
      const CHARS_TO_CONTAIN = ['°', '’', '”']
      const longitudeValue = longitude({ format: 'dms' })

      expect(typeof longitudeValue).toBe('string')
      expect(
        CHARS_TO_CONTAIN.every(char => longitudeValue.includes(char))
      ).toBe(true)
    }
  })
})
