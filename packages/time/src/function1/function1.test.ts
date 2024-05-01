import { function1 } from './function1'

describe('Testing Function1 Function1 function', () => {
  it('returns an random function1', () => {
    const result = function1()
    expect(typeof result).toEqual('string')
  })
})
