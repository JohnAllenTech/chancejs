import { times } from '@chancejs/generator'
import { profession } from './profession'
import { professions, ranks } from './constants'

describe('Testing Web Profession function', () => {
  it('returns an random profession', () => {
    times(1000, () => {
      const result = profession()
      expect(typeof result).toEqual('string')
      expect(professions.includes(result)).toEqual(true)
    })
  })

  it('returns an random profession and rank', () => {
    times(1000, () => {
      const result = profession({ rank: true })
      const splitResult = result.split(' ')
      expect(typeof result).toEqual('string')
      expect(ranks.includes(splitResult[0] + ' ')).toEqual(true)
      expect(professions.includes(splitResult.slice(1).join(' '))).toEqual(true)
    })
  })
})
