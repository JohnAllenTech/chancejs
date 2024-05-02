import { hour } from './hour'

describe('Testing Hour Hour function', () => {
  it('returns an random hour', () => {
    const result = hour()
    expect(typeof result).toEqual('number')
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(12)
  })
  it('returns an hour in 24 hour format', () => {
    const result = hour({ twentyfour: true })
    expect(typeof result).toEqual('number')
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(23)
  })
  it('returns an hour, can specify min and max', () => {
    const result = hour({ min: 7, max: 10 })
    expect(typeof result).toEqual('number')
    expect(result).toBeGreaterThanOrEqual(7)
    expect(result).toBeLessThanOrEqual(10)
  })
  it('returns an hour, can specify just min', () => {
    const result = hour({ min: 7 })
    expect(typeof result).toEqual('number')
    expect(result).toBeGreaterThanOrEqual(7)
    expect(result).toBeLessThanOrEqual(12)
  })
  it('returns an hour, can specify just max', () => {
    const result = hour({ max: 10 })
    expect(typeof result).toEqual('number')
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(10)
  })

  it('throws if max is > 12 and 12 hour format is not specifed', () => {
    expect(() => hour({ max: 13 })).toThrowError(
      'Chance: Max cannot be greater than 12.'
    )
  })

  it('throws if max is > 23 and 12 hour format is specifed', () => {
    expect(() => hour({ max: 24, twentyfour: true })).toThrowError(
      'Chance: Max cannot be greater than 23 for twentyfour option.'
    )
  })

  it('throws if min > max', () => {
    expect(() => hour({ min: 2, max: 1 })).toThrowError(
      'Chance: Min cannot be greater than Max.'
    )
  })

  it('throws if min < 0', () => {
    expect(() => hour({ min: -1 })).toThrowError(
      'Chance: Min cannot be less than 0.'
    )
  })
})
