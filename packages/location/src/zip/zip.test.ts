import { zip } from './zip'

describe('Testing Zip Zip function', () => {
  it('returns an random zip', () => {
    const result = zip()
    expect(typeof result).toEqual('string')
  })
})
