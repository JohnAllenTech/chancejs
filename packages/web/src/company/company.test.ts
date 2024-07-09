import { times } from '@chancejs/generator'
import { company } from './company'
import { companies } from './constants'

describe('Testing Web Company function', () => {
  it('returns an random company', () => {
    times(1000, () => {
      const result = company()
      expect(typeof result).toEqual('string')
      expect(companies.includes(result)).toEqual(true)
    })
  })
})
