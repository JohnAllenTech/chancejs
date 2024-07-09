import { times } from '@johnallentech/generator'
import { domain } from './domain'

describe('Testing Web Domain function', () => {
  it('returns a random domain', () => {
    times(1000, () => {
      const result = domain()
      expect(typeof result).toEqual('string')
      expect(result.split('.').length).toBeGreaterThan(1)
    })
  })

  it('obeys tld option', () => {
    times(1000, () => {
      const result = domain({ tld: 'com' })
      expect(typeof result).toEqual('string')
      expect(result.split('.')[1]).toEqual('com')
    })
  })
})
