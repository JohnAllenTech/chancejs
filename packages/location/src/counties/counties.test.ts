import { times } from '@chancejs/generator'
import { counties } from './counties'

describe('Testing counties function', () => {
  it('returns a county name (uk by default)', () => {
    times(1000, () => {
      const countyName = counties()
      expect(typeof countyName).toBe('string')
      expect(countyName.length).toBeGreaterThan(2)
    })
  })

  it('returns a county name and obeys country', () => {
    times(1000, () => {
      const countyName = counties({ country: 'uk' })
      expect(typeof countyName).toBe('string')
      expect(countyName.length).toBeGreaterThan(2)
    })
  })
})
