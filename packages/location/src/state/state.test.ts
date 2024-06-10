import { times } from '@johnallentech/generator'
import { state } from './state'

describe('Testing state function', () => {
  it('returns a random (short) state name', () => {
    times(1000, () => {
      const result = state()
      expect(typeof result).toBe('string')
      expect(result.length).toBeLessThan(3)
    })
  })

  it('can take a country and return a state', () => {
    times(1000, () => {
      const result = state({ country: 'it' })
      expect(typeof result).toBe('string')
      expect(result.length).toBe(3)
    })
  })

  it('can return full us state name', () => {
    times(1000, () => {
      const result = state({ full: true })
      expect(typeof result).toBe('string')
      expect(result.length).toBeGreaterThan(2)
    })
  })

  it('with country returns a long state name', () => {
    times(1000, () => {
      let result = state({ country: 'it', full: true })
      expect(typeof result).toBe('string')
      expect(result.length).toBeGreaterThan(2)
      result = state({ country: 'uk', full: true })
      expect(typeof result).toBe('string')
      expect(result.length).toBeGreaterThan(2)
    })
  })
  it('with country returns a long state name', () => {
    times(1000, () => {
      let result = state({ country: 'it', raw: true })
      expect(typeof result).toBe('object')
      expect(result.abbreviation).toBeDefined()
      expect(result.name).toBeDefined()
    })
  })
})
