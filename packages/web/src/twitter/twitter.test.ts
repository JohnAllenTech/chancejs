import { times } from '@chancejs/generator'
import { twitter } from './twitter'

describe('Testing Web Twitter function', () => {
  it('returns an random twitter', () => {
    times(1000, () => {
      const result = twitter()
      expect(typeof result).toEqual('string')
      expect(/\@[A-Za-z]+/m.test(result)).toBe(true)
    })
  })
})
