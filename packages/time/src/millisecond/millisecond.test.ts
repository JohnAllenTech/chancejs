import { millisecond } from './millisecond'

describe('Testing Millisecond Millisecond function', () => {
  it('returns an random millisecond', () => {
    const result = millisecond()
    expect(typeof result).toEqual('number')
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(999)
  })
})
