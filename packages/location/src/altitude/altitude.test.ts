import { times } from '@johnallentech/generator'
import { altitude } from './altitude'

describe('Testing altitude function', () => {
  it('looks right', () => {
    expect(typeof altitude()).toBe('number')
  })

  it('is in the right range', () => {
    times(1000, () => {
      const alt = altitude({ min: 0, max: 8848 })
      expect(alt).toBeGreaterThanOrEqual(0)
      expect(alt).toBeLessThanOrEqual(8848)
    })
  })

  it('will accept a min and obey it', () => {
    times(1000, () => {
      const min = Math.random() * 8848
      const alt = altitude({ min })
      expect(alt).toBeGreaterThanOrEqual(min)
      expect(alt).toBeLessThanOrEqual(8848)
    })
  })

  it('will accept a max and obey it', () => {
    times(1000, () => {
      const max = Math.random() * 8848
      const alt = altitude({ max })
      expect(alt).toBeGreaterThanOrEqual(0)
      expect(alt).toBeLessThanOrEqual(max)
    })
  })
})
