import { month } from './month'

describe('Testing Month Month function', () => {
  it('returns an random month', () => {
    const result = month()
    expect(typeof result).toEqual('string')
  })

  it('returns an random month in raw format', () => {
    const result = month({ raw: true })
    expect(typeof result).not.toEqual('string')
    expect(typeof result).toEqual('object')
  })

  it('returns an random month obeying min and max', () => {
    const result = month({ raw: true, min: 5, max: 10 })
    expect(typeof result).not.toEqual('string')
    expect(typeof result).toEqual('object')
    expect(parseInt(result.numeric)).toBeGreaterThanOrEqual(5)
    expect(parseInt(result.numeric)).toBeLessThanOrEqual(10)
  })

  it('returns an random month obeying only min', () => {
    const result = month({ raw: true, min: 5 })
    expect(typeof result).not.toEqual('string')
    expect(typeof result).toEqual('object')
    expect(parseInt(result.numeric)).toBeGreaterThanOrEqual(5)
    expect(parseInt(result.numeric)).toBeLessThanOrEqual(12)
  })

  it('returns an random month obeying only max', () => {
    const result = month({ raw: true, max: 5 })
    expect(typeof result).not.toEqual('string')
    expect(typeof result).toEqual('object')
    expect(parseInt(result.numeric)).toBeGreaterThanOrEqual(0)
    expect(parseInt(result.numeric)).toBeLessThanOrEqual(5)
  })

  it('throws if min > max', () => {
    expect(() => month({ raw: true, min: 6, max: 5 })).toThrowError(
      'Chance: Min cannot be greater than Max.'
    )
  })

  it('throws if max > 12', () => {
    expect(() => month({ raw: true, min: 6, max: 13 })).toThrowError(
      'Chance: Max cannot be greater than 12.'
    )
  })

  it('throws if min < 1', () => {
    expect(() => month({ raw: true, min: 0, max: 5 })).toThrowError(
      'Chance: Min cannot be less than 1.'
    )
  })
})
