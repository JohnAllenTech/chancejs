import { birthday } from './birthday'

describe('Testing Birthday Birthday function', () => {
  it('returns an random birthday', () => {
    const result = birthday()
    expect(typeof result).toEqual('string | Date')
  })
})
