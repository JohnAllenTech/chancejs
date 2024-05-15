import { currency_pair } from './currency_pair'

describe('Testing CurrencyPair CurrencyPair function', () => {
  it('returns an random currency_pair', () => {
    const result = currency_pair()
    expect(typeof result).toEqual('object')
  })
})
