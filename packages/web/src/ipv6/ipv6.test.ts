import { times } from '@johnallentech/generator'
import { ipv6 } from './ipv6'

describe('Testing Web Ipv6 function', () => {
  it('returns an random ipv6', () => {
    times(1000, () => {
      const result = ipv6()
      expect(typeof result).toEqual('string')
      expect(result.split(':').length).toEqual(8)
      expect(
        /[a-f0-9]+:[a-f0-9]+:[a-f0-9]+:[a-f0-9]+:[a-f0-9]+:[a-f0-9]+:[a-f0-9]+:[a-f0-9]+/.test(
          result
        )
      ).toEqual(true)
    })
  })
})
