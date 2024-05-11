import { times } from '@chancejs/generator'
import { city } from './city'

describe('Testing city function', () => {
  it('looks right', () => {
    times(1000, () => {
      const cityName = city()
      expect(typeof cityName).toBe('string')
      expect(/[a-zA-Z]+/.test(cityName)).toBe(true)
    })
  })
})
