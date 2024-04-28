import { sentence } from './sentence'

describe('Testing Text Sentence', () => {
  it('returns a random sentence', () => {
    const s = sentence()
    expect(typeof s).toEqual('string')
    const words = s.split(' ')
    expect(words.length).toBeGreaterThan(11)
    expect(words.length).toBeLessThan(19)
    expect(s.charAt(0)).toMatch(/[A-Z]/m)
  })
  it('takes in words param and only returns same number of words', () => {
    const s = sentence({ words: 5 })
    expect(typeof s).toEqual('string')
    const words = s.split(' ')
    expect(words.length).toEqual(5)
    expect(s).toMatch(/[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+.?/m)
  })
  it('takes in valid punctuation and correctly applies it', () => {
    const s = sentence({ punctuation: '?' })
    expect(typeof s).toEqual('string')
    const words = s.split(' ')
    expect(words.length).toBeGreaterThan(11)
    expect(words.length).toBeLessThan(19)
    expect(s.charAt(s.length - 1)).toEqual('?')
  })
  it('applies period to end of sentance if punctuation not given', () => {
    const s = sentence()
    expect(typeof s).toEqual('string')
    const words = s.split(' ')
    expect(words.length).toBeGreaterThan(11)
    expect(words.length).toBeLessThan(19)
    expect(s.charAt(s.length - 1)).toEqual('.')
  })
  it('returns 3 character syllable with lower case first letter', () => {
    const s = sentence({})
    expect(typeof s).toEqual('string')
    const words = s.split(' ')
    expect(words.length).toBeGreaterThan(11)
    expect(words.length).toBeLessThan(19)
  })
})
