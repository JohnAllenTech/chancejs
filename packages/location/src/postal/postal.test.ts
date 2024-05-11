import { postal } from './postal'

describe('Testing Postal function', () => {
  it('returns a random postal code', () => {
    const result = postal()
    expect(typeof result).toEqual('string')
    expect(result.length).toBe(7) // Assuming postal codes are expected to be of length 7
    ;[...result].forEach(char => {
      expect(char.toUpperCase()).toBe(char) // Asserting that all characters are uppercase
    })
  })
})
