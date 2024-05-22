import { times } from '@chancejs/generator'
import { url } from './url'

describe('Testing Url function', () => {
  it('returns a random url', () => {
    times(1000, () => {
      const result = url()
      expect(typeof result).toEqual('string')
      expect(result.split('.').length).toBeGreaterThan(1)
      expect(result.split('://').length).toBeGreaterThan(1)
    })
  })

  it('respects the given domain', () => {
    times(1000, () => {
      const result = url({ domain: 'victorquinn.com' })
      expect(typeof result).toEqual('string')
      expect(result.split('.').length).toBeGreaterThan(1)
      expect(result.split('://').length).toBeGreaterThan(1)
      expect(result.split('victorquinn.com').length).toBeGreaterThan(1)
    })
  })

  it('respects the given domain prefix', () => {
    times(1000, () => {
      const result = url({ domain_prefix: 'www' })
      expect(typeof result).toEqual('string')
      expect(result.split('.').length).toBeGreaterThan(1)
      expect(result.split('://').length).toBeGreaterThan(1)
      expect(result.split('www').length).toBeGreaterThan(1)
    })
  })

  it('respects the given path', () => {
    times(1000, () => {
      const result = url({ path: 'images' })
      expect(typeof result).toEqual('string')
      expect(result.split('.').length).toBeGreaterThan(1)
      expect(result.split('://').length).toBeGreaterThan(1)
      expect(result.split('/images').length).toBeGreaterThan(1)
    })
  })

  it('respects the given extensions', () => {
    times(1000, () => {
      const result = url({ extensions: ['html'] })
      expect(typeof result).toEqual('string')
      expect(result.split('.').length).toBeGreaterThan(1)
      expect(result.split('://').length).toBeGreaterThan(1)
      expect(result.indexOf('.html')).not.toBe(-1)
    })
  })
})
