import { times } from '@johnallentech/generator'
import { currency_pair } from './currency_pair'

describe('Testing CurrencyPair CurrencyPair function', () => {
  it('returns an random currency_pair', () => {
    times(1000, () => {
      const [currencyOne, currencyTwo] = currency_pair()
      expect(typeof currencyOne).toEqual('object')
      expect(typeof currencyTwo).toEqual('object')
      expect(currencyOne.code).not.toEqual(currencyTwo.code)
    })
  })

  it('can return string version', () => {
    times(1000, () => {
      const currencyPair = currency_pair({ string: true })
      expect(typeof currencyPair).toBe('string')
      expect(currencyPair.length).toBe(7)
      expect(/^[A-Z]{3}\/[A-Z]{3}$/.test(currencyPair)).toBe(true)
      const names = currencyPair.split('/')
      expect(names[0]).not.toEqual(names[1])
    })
  })
})
