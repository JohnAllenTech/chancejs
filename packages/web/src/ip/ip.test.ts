import { times } from '@johnallentech/generator'
import { ip } from './ip'

describe('Testing Web Ip function', () => {
  it('returns an random ip', () => {
    times(1000, () => {
      const result = ip()
      const split = result.split('.').map(section => parseInt(section))
      expect(typeof result).toEqual('string')
      expect(split.length).toEqual(4)
      expect(split[0]).toBeGreaterThanOrEqual(1)
      expect(split[0]).toBeLessThanOrEqual(254)
      expect(split[1]).toBeGreaterThanOrEqual(0)
      expect(split[1]).toBeLessThanOrEqual(255)
      expect(split[2]).toBeLessThanOrEqual(255)
      expect(split[2]).toBeGreaterThanOrEqual(0)
      expect(split[3]).toBeGreaterThanOrEqual(1)
      expect(split[3]).toBeLessThanOrEqual(254)
      expect(/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/.test(result)).toEqual(true)
    })
  })
})
