import { floating } from '@chancejs/floating'
import { latitude } from './latitude'

describe('Testing latitude function', () => {
  it('returns a string', () => {
    const result = latitude()
    expect(typeof result).toEqual('number')
  })

  it('is in the right range', () => {
    for (let i = 0; i < 1000; i++) {
      let latitudeValue = latitude()
      expect(latitudeValue).toBeGreaterThanOrEqual(-90)
      expect(latitudeValue).toBeLessThanOrEqual(90)
    }
  })

  it('will accept a min and obey it', () => {
    for (let i = 0; i < 1000; i++) {
      let min = floating({ min: -90, max: 90 })
      let latitudeValue = latitude({ min: min })
      expect(latitudeValue).toBeGreaterThanOrEqual(min)
      expect(latitudeValue).toBeLessThanOrEqual(90)
    }
  })

  it('will accept a max and obey it', () => {
    for (let i = 0; i < 1000; i++) {
      let max = floating({ min: -90, max: 90 })
      let latitudeValue = latitude({ max: max })
      expect(latitudeValue).toBeGreaterThanOrEqual(-90)
      expect(latitudeValue).toBeLessThanOrEqual(max)
    }
  })

  it('returns latitude in DD format as default', () => {
    for (let i = 0; i < 1000; i++) {
      const CHARS_NOT_TO_CONTAIN = ['°', '’', '”']
      let latitudeValue = latitude()

      expect(typeof latitudeValue).toEqual('number')
      expect(
        CHARS_NOT_TO_CONTAIN.every(
          char => !latitudeValue.toString().includes(char)
        )
      ).toBeTruthy()
    }
  })

  it('will obey DD format', () => {
    for (let i = 0; i < 1000; i++) {
      const CHARS_NOT_TO_CONTAIN = ['°', '’', '”']
      let latitudeValue = latitude({ format: 'dd' })

      expect(typeof latitudeValue).toEqual('number')
      expect(
        CHARS_NOT_TO_CONTAIN.every(
          char => !latitudeValue.toString().includes(char)
        )
      ).toBeTruthy()
    }
  })

  it('will obey DDM format', () => {
    for (let i = 0; i < 1000; i++) {
      const CHARS_TO_CONTAIN = ['°']
      const CHARS_NOT_TO_CONTAIN = ['’', '”']
      let latitudeValue = latitude({ format: 'ddm' })

      expect(typeof latitudeValue).toEqual('string')
      expect(
        CHARS_TO_CONTAIN.every(char => latitudeValue.includes(char))
      ).toBeTruthy()
      expect(
        CHARS_NOT_TO_CONTAIN.every(char => !latitudeValue.includes(char))
      ).toBeTruthy()
    }
  })

  it('will obey DMS format', () => {
    for (let i = 0; i < 1000; i++) {
      const CHARS_TO_CONTAIN = ['°', '’', '”']
      let latitudeValue = latitude({ format: 'dms' })

      expect(typeof latitudeValue).toEqual('string')
      expect(
        CHARS_TO_CONTAIN.every(char => latitudeValue.includes(char))
      ).toBeTruthy()
    }
  })
})
