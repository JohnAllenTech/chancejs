import { IntegerGenerator } from '@johnallentech/integer'
import { paragraph } from './paragraph'

describe('Testing Text Paragraph', () => {
  it('returns a random paragraph', () => {
    const p = paragraph()
    expect(typeof p).toEqual('string')
    const sentences = p.split('.')
    expect(sentences.length).toBeGreaterThan(2)
    expect(sentences.length).toBeLessThan(9)
  })
  it('takes in sentences param and only returns same number of sentences', () => {
    const p = paragraph({ sentences: 5 })
    expect(typeof p).toEqual('string')
    const sentences = p.split('.')
    // 6 instead of 5 because of the way we split the string ie.
    // ('1.2.3.').split('.') will return 4 with the last string being ''
    expect(sentences.length).toEqual(6)
  })
  it('takes in valid punctuation and correctly applies it', () => {
    const rand = new IntegerGenerator().integer({ min: 3, max: 10 })
    const p = paragraph({ linebreak: true, sentences: rand })
    expect(typeof p).toEqual('string')
    const sentences = p.split('\n')
    expect(sentences.length).toEqual(rand)
  })
})
