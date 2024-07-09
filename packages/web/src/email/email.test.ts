import { times } from '@johnallentech/generator'
import { email } from './email'

describe('Testing Web Email function', () => {
  it('returns an random email', () => {
    times(10000, () => {
      const result = email()
      expect(typeof result).toEqual('string')
      expect(result.split('@').length).toBeGreaterThanOrEqual(2)
    })
  })

  it('obeys domain, if specified', () => {
    times(10000, () => {
      const result = email({ domain: 'victorquinn.com' })
      expect(typeof result).toEqual('string')
      expect(result.split('@')[1]).toEqual('victorquinn.com')
    })
  })

  it('has a length specified, should generate string before domain with equal length', () => {
    times(10000, () => {
      const result = email({ length: 5 })
      expect(typeof result).toEqual('string')
      expect(result.split('@')[0].length).toEqual(5)
    })
  })
})
