import { times } from '@chancejs/generator'
import { loremPicsum } from './loremPicsum'

describe('Testing loremPicsum function', () => {
  // Test default behavior
  it('returns a random LoremPicsum URL with default options', () => {
    times(1000, () => {
      const result = loremPicsum()
      expect(result).toMatch(/^https:\/\/picsum\.photos\/500\/500\/\?random$/)
    })
  })

  // Test greyscale option
  it('returns a greyscale LoremPicsum URL', () => {
    times(1000, () => {
      const result = loremPicsum({ greyscale: true })
      expect(result).toMatch(
        /^https:\/\/picsum\.photos\/g\/500\/500\/\?random$/
      )
    })
  })

  // Test blurred option
  it('returns a blurred LoremPicsum URL', () => {
    times(1000, () => {
      const result = loremPicsum({ blurred: true })
      expect(result).toMatch(/^https:\/\/picsum\.photos\/500\/500\/\?blur$/)
    })
  })

  // Test custom width and height
  it('returns a LoremPicsum URL with custom width and height', () => {
    times(1000, () => {
      const result = loremPicsum({ width: 300, height: 400 })
      expect(result).toMatch(/^https:\/\/picsum\.photos\/400\/300\/\?random$/)
    })
  })

  // Test combination of greyscale and blurred options
  it('returns a greyscale and blurred LoremPicsum URL', () => {
    times(1000, () => {
      const result = loremPicsum({ greyscale: true, blurred: true })
      expect(result).toMatch(/^https:\/\/picsum\.photos\/g\/500\/500\/\?blur$/)
    })
  })

  it('returns a greyscale and blurred loremPicsum with custom dimensions', () => {
    times(1000, () => {
      const result = loremPicsum({
        greyscale: true,
        blurred: true,
        width: 250,
        height: 350,
      })
      expect(result).toMatch(/^https:\/\/picsum\.photos\/g\/350\/250\/\?blur$/)
    })
  })
})
