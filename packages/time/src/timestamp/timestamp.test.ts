import { timestamp } from './timestamp'

describe('Testing Time Timestamp function', () => {
  it('returns an random timestamp between 0 and current timestamp', () => {
    const result = timestamp()
    expect(typeof result).toEqual('number')
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(new Date().getTime() / 1000)
  })
})
