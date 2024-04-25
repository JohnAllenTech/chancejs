import { times } from '@chancejs/generator'
import { syllable } from './syllable'

const consonants = 'bcdfghjklmnprstvwz' // consonants except hard to speak ones
const vowels = 'aeiou' // vowels
const all = consonants + vowels // all

describe('Testing Text Syllable', () => {
  it('returns a string', () => {
    const s = syllable()
    expect(typeof s).toEqual('string')
    expect(all.includes(s.charAt(0))).toEqual(true)
    expect(
      consonants.includes(s.charAt(0))
        ? vowels.includes(s.charAt(1))
        : consonants.includes(s.charAt(1))
    ).toEqual(true)
  })

  it('returns 3 character syllable', () => {
    const s = syllable({ length: 5 })
    expect(s.length).toEqual(5)
    expect(all.includes(s.charAt(0))).toEqual(true)
    expect(
      consonants.includes(s.charAt(0))
        ? vowels.includes(s.charAt(1))
        : consonants.includes(s.charAt(1))
    ).toEqual(true)
  })

  it('returns 3 character syllable with upper case first letter', () => {
    const s = syllable({ length: 4, capitalize: true })
    expect(s.length).toEqual(4)
    expect(s.charAt(0)).toEqual(s.charAt(0).toUpperCase())
    expect(all.includes(s.charAt(0).toLowerCase())).toEqual(true)
    expect(
      consonants.includes(s.charAt(0).toLowerCase())
        ? vowels.includes(s.charAt(1).toLowerCase())
        : consonants.includes(s.charAt(1).toLowerCase())
    ).toEqual(true)
  })

  it('returns 3 character syllable with lower case first letter', () => {
    const s = syllable({ length: 4, capitalize: false })
    expect(s.length).toEqual(4)
    expect(s.charAt(0)).toEqual(s.charAt(0).toLowerCase())
    expect(all.includes(s.charAt(0).toLowerCase())).toEqual(true)
    expect(
      consonants.includes(s.charAt(0).toLowerCase())
        ? vowels.includes(s.charAt(1).toLowerCase())
        : consonants.includes(s.charAt(1).toLowerCase())
    ).toEqual(true)
  })

  it('takes in a seed', () => {
    const s = syllable({}, 1234)
    expect(typeof s).toEqual('string')
    expect(all.includes(s.charAt(0))).toEqual(true)
    expect(
      consonants.includes(s.charAt(0))
        ? vowels.includes(s.charAt(1))
        : consonants.includes(s.charAt(1))
    ).toEqual(true)
  })
})
