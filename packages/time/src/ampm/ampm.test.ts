import { ampm } from './ampm'

describe('Testing Ampm Ampm function', () => {
  it('returns an random ampm', () => {
    const result = ampm()
    expect(typeof result).toEqual('string')
    expect(/^([ap]m)$/m.test(result)).toEqual(true)
  })
})
