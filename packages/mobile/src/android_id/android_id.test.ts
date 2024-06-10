import { times } from '@johnallentech/generator'
import { android_id } from './android_id'

describe('android_id', () => {
  it('returns a proper android id', () => {
    times(1000, () => {
      expect(android_id()).toMatch(/^APA91([0-9a-zA-Z-_]){178}$/)
    })
  })
})
