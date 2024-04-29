import { suffixes } from './constants'
import { suffix } from './suffix'

describe('Testing Person Suffix function', () => {
  it('returns an random suffix', () => {
    const result = suffix()
    expect(typeof result).toEqual('string')
    expect(result.length).toBeLessThan(7)
    expect(suffixes.map(elem => elem.abbreviation).includes(result)).toEqual(
      true
    )
  })

  it('returns an random full suffix', () => {
    const result = suffix({ full: true })
    expect(typeof result).toEqual('string')
    expect(result.length).toBeGreaterThan(5)
    expect(suffixes.map(elem => elem.name).includes(result)).toEqual(true)
  })
})
