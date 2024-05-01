import { date } from './date'

describe('Testing Date Date function', () => {
  it('returns an random date', () => {
    const result = date()
    expect(typeof result).toEqual('string')
  })
})
