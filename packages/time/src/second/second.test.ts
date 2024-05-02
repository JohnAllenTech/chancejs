import { second } from './second'

describe('Testing Time Second function', () => {
  it('returns an random second', () => {
    const result = second()
    expect(typeof result).toEqual('number')
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(59)
  })
})
