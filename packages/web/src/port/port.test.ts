import { times } from '@johnallentech/generator'
import { port } from './port'

describe('Testing Web Port function', () => {
  it('returns an random port', () => {
    times(1000, () => {
      const result = port()
      expect(typeof result).toEqual('number')
      expect(result).toBeLessThanOrEqual(65535)
      expect(result).toBeGreaterThanOrEqual(0)
    })
  })
})
