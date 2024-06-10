import { times } from '@johnallentech/generator'
import { depth } from './depth'

describe('Testing depth function', () => {
  it('looks right', () => {
    expect(typeof depth()).toBe('number')
  })

  it('is in the right range', () => {
    times(1000, () => {
      const depthValue = depth()
      expect(depthValue).toBeLessThanOrEqual(0)
      expect(depthValue).toBeGreaterThanOrEqual(-10994)
    })
  })

  it('will accept a min and obey it', () => {
    times(1000, () => {
      const min = Math.random() * -10994
      const depthValue = depth({ min })
      expect(depthValue).toBeGreaterThanOrEqual(min)
      expect(depthValue).toBeLessThanOrEqual(0)
    })
  })

  it('will accept a max and obey it', () => {
    times(1000, () => {
      const max = Math.random() * 0
      const depthValue = depth({ max })
      expect(depthValue).toBeGreaterThanOrEqual(-10994)
      expect(depthValue).toBeLessThanOrEqual(max)
    })
  })
})
