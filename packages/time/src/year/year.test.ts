import { year } from './year'

describe('Testing Year Year function', () => {
  // This will fail if you run in ~ 11:59:45 on 31st December. The other 99.9999% of the year it will slight improve test performance
  // If you are reading this at 00:01:00 on the 1st January. Please close your laptop and come back tomorrow
  const currentYear = new Date().getFullYear()

  it('returns an random year', () => {
    const result = year()
    expect(typeof result).toEqual('string')
    expect(parseInt(result)).toBeLessThanOrEqual(currentYear + 100)
    expect(parseInt(result)).toBeGreaterThanOrEqual(currentYear)
  })

  it('returns a year, can specify min and max', () => {
    const result = year({ min: 2500, max: 2600 })
    expect(typeof result).toEqual('string')
    expect(parseInt(result)).toBeLessThanOrEqual(2600)
    expect(parseInt(result)).toBeGreaterThanOrEqual(2500)
  })

  it('returns a year, can specify just min', () => {
    const result = year({ min: 2500 })
    expect(typeof result).toEqual('string')
    expect(parseInt(result)).toBeLessThanOrEqual(2600)
    expect(parseInt(result)).toBeGreaterThanOrEqual(2500)
  })

  it('returns a year, can specify just max', () => {
    const result = year({ max: 2500 })
    expect(typeof result).toEqual('string')
    expect(parseInt(result)).toBeLessThanOrEqual(2500)
    expect(parseInt(result)).toBeGreaterThanOrEqual(currentYear)
  })
})
