import { times } from '@chancejs/generator'
import { hashtag } from './hashtag' // Adjust the path as necessary

describe('Testing hashtag function', () => {
  it('returns what looks like a hashtag', () => {
    times(1000, () => {
      const result = hashtag()
      expect(typeof result).toBe('string')
      expect(/^\#\w+$/m.test(result)).toBe(true)
    })
  })
})
