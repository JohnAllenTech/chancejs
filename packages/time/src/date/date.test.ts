import { times } from '@johnallentech/generator'
import { date } from './date'

describe('Testing Time Date function', () => {
  it('returns an random date', () => {
    times(1000, () => {
      const result = date()
      expect(typeof result).toEqual('object')
      expect(typeof result.getTime()).toEqual('number')
    })
  })
  it('accepts an american option', () => {
    times(1000, () => {
      const result = date({ american: true })
      expect(typeof result).toEqual('object')
      expect(typeof result.getTime()).toEqual('number')
    })
  })
  it('accepts a year', () => {
    let result = date({ year: 1983 })

    expect(typeof result).toEqual('object')
    expect(result.getFullYear()).toEqual(1983)
  })

  it('accepts a month', () => {
    times(1000, () => {
      const month = [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11][
        Math.floor(Math.random() * 11)
      ]
      const result = date({ month })
      expect(typeof result).toEqual('object')
      expect(result.getMonth()).toEqual(month)
    })
  })
  it('accepts a month > 11', () => {
    const result = date({ month: 13 })
    expect(typeof result).toEqual('object')
    expect(result.getMonth()).toEqual(1)
  })
  it('accepts a day', () => {
    let result = date({ day: 21 })
    expect(typeof result).toEqual('object')
    expect(result.getDate()).toEqual(21)
  })
  it('accepts and obeys a min and max', () => {
    times(1000, () => {
      const bounds = {
        min: new Date(),
        max: new Date(new Date().getTime() + 1234567890123),
      }
      const result = date({ ...bounds }).getTime()
      expect(result).toBeLessThanOrEqual(bounds.max.getTime())
      expect(result).toBeGreaterThanOrEqual(bounds.min.getTime())
    })
  })
  it('can specify just min', () => {
    const min = new Date()
    const result = date({ min }).getTime()
    expect(result).toBeGreaterThanOrEqual(min.getTime())
  })
  it('can specify just max', () => {
    const max = new Date()
    const result = date({ max }).getTime()
    expect(result).toBeLessThanOrEqual(max.getTime())
  })
  it('can return a string date', () => {
    times(1000, () => {
      const result = date({ string: true })
      expect(typeof result).toEqual('string')
      expect(/^[0-9][0-9]?\/[0-9][0-9]?\/[0-9]{4}/m.test(result)).toEqual(true)
    })
  })
})
