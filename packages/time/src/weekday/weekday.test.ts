import { days } from './constants'
import { weekday } from './weekday'

describe('Testing Time Weekday function', () => {
  it('returns an random day', () => {
    const result = weekday()
    expect(typeof result).toEqual('string')
    expect(days.includes(result)).toBe(true)
  })
  it('returns an random day excluding weekend', () => {
    const result = weekday({ weekday_only: true })
    expect(typeof result).toEqual('string')
    expect(result).not.toEqual('Saturday')
    expect(result).not.toEqual('Sunday')
  })
})
