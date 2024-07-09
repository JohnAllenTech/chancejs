import { times } from '@johnallentech/generator'
import { wp7_anid } from './wp7_anid'

describe('Testing Mobile Wp7Anid function', () => {
  it('returns a proper windows phone 7 anid', () => {
    times(1000, () => {
      expect(wp7_anid()).toMatch(/^A=[0-9A-F]{32}&E=[0-9a-f]{3}&W=\d$/)
    })
  })
})
