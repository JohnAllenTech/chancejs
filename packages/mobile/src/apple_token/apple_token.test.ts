import { times } from '@johnallentech/generator'
import { apple_token } from './apple_token'

describe('Testing Mobile AppleToken function', () => {
  it('returns a proper apple push token', () => {
    times(1000, () => {
      expect(apple_token()).toMatch(/^[0-9a-fA-F]{64}$/)
    })
  })
})
