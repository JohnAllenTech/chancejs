import { times } from '@johnallentech/generator'
import { Finance } from '../generator'
import { cc } from './cc'
import { luhn_check } from './util/luhnCheck'

describe('Testing finance cc function', () => {
  it('passes the luhn algorithm', () => {
    times(1000, () => {
      const number = cc()
      expect(luhn_check(number)).toBe(true)
    })
  })

  it('can take a type arg and obey it', () => {
    times(1000, () => {
      const finance = new Finance({})
      const type = finance.cc_type({ raw: true })
      const number = finance.cc({ type: type.name })
      expect(number.length).toBe(type.length)
    })
  })

  it('can take a short_name type arg and obey it', () => {
    times(1000, () => {
      const finance = new Finance({})
      const type = finance.cc_type({ raw: true })
      const number = finance.cc({ type: type.short_name })
      expect(number.length).toBe(type.length)
    })
  })
})
