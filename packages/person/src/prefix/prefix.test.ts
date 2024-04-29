import { allPrefixes, femalePrefixes, malePrefixes } from './constants'
import { prefix } from './prefix'

describe('Testing Prefix Prefix function', () => {
  it('returns an random prefix', () => {
    const result = prefix()
    expect(typeof result).toEqual('string')
    expect(result.length).toBeLessThan(5)
    expect(
      allPrefixes.map(prefix => prefix.abbreviation).includes(result)
    ).toEqual(true)
  })

  it('returns an random male prefix', () => {
    const result = prefix({ gender: 'male' })
    expect(typeof result).toEqual('string')
    expect(result.length).toBeLessThan(5)
    expect(
      malePrefixes.map(prefix => prefix.abbreviation).includes(result)
    ).toEqual(true)
  })

  it('returns an random female prefix', () => {
    const result = prefix({ gender: 'female' })
    expect(typeof result).toEqual('string')
    expect(result.length).toBeLessThan(5)
    expect(
      femalePrefixes.map(prefix => prefix.abbreviation).includes(result)
    ).toEqual(true)
  })

  it('returns an random full prefix', () => {
    const result = prefix({ full: true })
    expect(typeof result).toEqual('string')
    expect(result.length).toBeGreaterThan(3)
    expect(allPrefixes.map(prefix => prefix.name).includes(result)).toEqual(
      true
    )
  })
})
