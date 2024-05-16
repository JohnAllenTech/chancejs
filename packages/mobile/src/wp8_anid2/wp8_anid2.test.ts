import { times } from '@chancejs/generator'
import { wp8_anid2 } from './wp8_anid2'

describe('Testing Wp8Anid2 Wp8Anid2 function', () => {
  it('returns a proper windows phone 8 anid2', () => {
    times(1000, () => {
      expect(wp8_anid2()).toMatch(/^[0-9a-zA-Z]{43}=$/)
    })
  })
})
