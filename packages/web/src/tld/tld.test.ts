import { times } from '@johnallentech/generator'
import { tld } from './tld'
import { tlds } from './constants'

describe('Testing Web Tld function', () => {
  it('returns an random tld', () => {
    times(1000, () => {
      const result = tld()
      expect(typeof result).toEqual('string')
      expect(result.length).toBeLessThan(6)
      expect(tlds.includes(result)).toEqual(true)
    })
  })
})
