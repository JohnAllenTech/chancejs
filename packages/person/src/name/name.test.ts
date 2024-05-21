import { times } from '@chancejs/generator'
import { name } from './name'

describe('Testing person name function', () => {
  it('returns an random full name', () => {
    times(1000, () => {
      const result = name()
      expect(typeof result).toEqual('string')
      expect(result.length).toBeGreaterThanOrEqual(2)
      expect(result.length).toBeLessThanOrEqual(30)
      expect(result.split(' ').length).toBeLessThanOrEqual(4)
      expect(result.split(' ').length).toBeGreaterThanOrEqual(2)
      expect(/[\p{L}\s]+/.test(result)).toEqual(true)
    })
  })

  it('returns an random full name with middle name', () => {
    times(1000, () => {
      const result = name({ middle: true })
      expect(typeof result).toEqual('string')
      expect(result.length).toBeGreaterThanOrEqual(3)
      expect(/[\p{L}\s]+/.test(result)).toEqual(true)
    })
  })

  it('returns an random full name with middle initial', () => {
    times(1000, () => {
      const result = name({ middle_initial: true })
      expect(typeof result).toEqual('string')
      expect(result.length).toBeGreaterThanOrEqual(3)
      expect(
        /[\p{L}\p{M}']+ [\p{L}\p{M}]\. [\p{L}\p{M}']+/u.test(result)
      ).toEqual(true)
      expect(result.split(' ')[1].length).toEqual(2)
    })
  })

  it('returns an random full name with prefix', () => {
    times(1000, () => {
      const result = name({ prefix: true })
      expect(typeof result).toEqual('string')
      expect(result.length).toBeGreaterThanOrEqual(3)
      expect(
        /[a-zA-Z\u00C0-\u017F]{2,4}\.?\ [a-zA-Z\u00C0-\u017F]+\ [a-zA-Z\u00C0-\u017F]+/.test(
          result
        )
      ).toEqual(true)
    })
  })

  it('returns an random full name with suffix', () => {
    times(1000, () => {
      const result = name({ suffix: true })
      expect(typeof result).toEqual('string')
      expect(result.length).toBeGreaterThanOrEqual(3)
      expect(/[\p{L}\s\.]+/.test(result)).toEqual(true)
    })
  })
})
