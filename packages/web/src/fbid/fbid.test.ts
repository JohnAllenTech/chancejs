import { times } from '@johnallentech/generator'
import { fbid } from './fbid'

describe('Testing Fbid Fbid function', () => {
  it('returns an random fbid', () => {
    times(1000, () => {
      const result = fbid()
      expect(typeof result).toEqual('string')
      expect(result.length).toEqual(16)
    })
  })
})
