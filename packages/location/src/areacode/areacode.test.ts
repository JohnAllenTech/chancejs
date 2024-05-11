import { times } from '@chancejs/generator'
import { areacode } from './areacode'

describe('Testing areacode function', () => {
  it('returns random area code', () => {
    times(1000, () => {
      const areaCode = areacode()
      expect(typeof areaCode).toBe('string')
      expect(/^\(([2-9][0-8][0-9])\)$/.test(areaCode)).toBe(true)
    })
  })

  it('can take parens false', () => {
    times(1000, () => {
      const areaCode = areacode({ parens: false })
      expect(typeof areaCode).toBe('string')
      expect(/^[2-9][0-8][0-9]$/.test(areaCode)).toBe(true)
    })
  })

  it('can take parens true', () => {
    times(1000, () => {
      const areaCode = areacode({ parens: true })
      expect(typeof areaCode).toBe('string')
      expect(/^\(([2-9][0-8][0-9])\)$/.test(areaCode)).toBe(true)
    })
  })
})
