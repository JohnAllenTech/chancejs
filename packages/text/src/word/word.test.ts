import { word } from './word'

describe('Testing Text Word', () => {
  it('returns a string', () => {
    const w = word()
    expect(typeof w).toEqual('string')
    expect(w.length).toBeGreaterThan(1)
    expect(w.length).toBeLessThan(10)
  })

  it('returns a capitialised word', () => {
    const w = word({ capitalize: true })
    expect(typeof w).toEqual('string')
    expect(w.length).toBeGreaterThan(1)
    expect(w.length).toBeLessThan(10)
    expect(w.charAt(0)).toMatch(/[A-Z]/m)
  })

  it('returns 3 character syllable with upper case first letter', () => {
    const w = word({ syllables: 3 })
    expect(typeof w).toEqual('string')
    expect(w.length).toBeGreaterThan(5)
    expect(w.length).toBeLessThan(10)
  })

  it('returns 3 character syllable with lower case first letter', () => {
    const w = word({ length: 5 })
    expect(w.length).toEqual(5)
  })

  it('takes in a seed', () => {
    expect(() => word({ length: 1, syllables: 1 })).toThrowError(
      'Chance: Cannot specify both syllables AND length.'
    )
  })
})
