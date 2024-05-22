import { times } from '@chancejs/generator'
import { google_analytics } from './google_analytics' // Adjust the path as necessary

describe('Testing google_analytics function', () => {
  it('returns what looks like a valid tracking code', () => {
    times(1000, () => {
      const tracking_code = google_analytics()
      expect(typeof tracking_code).toBe('string')
      expect(tracking_code.length).toBe(12)
      expect(tracking_code).toContain('UA-')
    })
  })
})
