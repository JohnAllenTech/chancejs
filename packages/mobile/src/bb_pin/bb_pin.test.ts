import { times } from '@johnallentech/generator'
import { bb_pin } from './bb_pin'

describe('Testing BbPin BbPin function', () => {
  it('returns a proper blackberry pin', () => {
    times(1000, () => {
      expect(bb_pin()).toMatch(/^[0-9a-f]{8}$/)
    })
  })
})
