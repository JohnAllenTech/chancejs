import { minute } from './minute'

describe('Testing Minute Minute function', () => {
  it('returns an random minute', () => {
    const result = minute()
    expect(typeof result).toEqual('number')
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(59)
  })

  it('returns an random obeying min and max', () => {
    const result = minute({ min: 18, max: 35 })
    expect(typeof result).toEqual('number')
    expect(result).toBeGreaterThanOrEqual(18)
    expect(result).toBeLessThanOrEqual(35)
  })

  it('returns an random obeying only min', () => {
    const result = minute({ min: 5 })
    expect(typeof result).toEqual('number')
    expect(result).toBeGreaterThanOrEqual(5)
    expect(result).toBeLessThanOrEqual(59)
  })

  it('returns an random obeying only max', () => {
    const result = minute({ max: 32 })
    expect(typeof result).toEqual('number')
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(32)
  })
})
