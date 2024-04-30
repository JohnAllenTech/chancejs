import { lastNames } from './constants'
import { last } from './last'

describe('Testing last function', () => {
  it('returns an random last name when no options given', () => {
    const result = last()
    expect(typeof result).toEqual('string')
    expect(result.length).toBeGreaterThanOrEqual(2)
    expect(result.length).toBeLessThanOrEqual(20)
    expect(result.split(' ').length).toEqual(1)
    expect(Object.values(lastNames).flat().includes(result)).toEqual(true)
  })

  it('returns an random french last name from nationaility defined', () => {
    const result = last({ nationality: 'fr' })
    expect(typeof result).toEqual('string')
    expect(result.length).toBeGreaterThanOrEqual(2)
    expect(result.length).toBeLessThanOrEqual(20)
    expect(result.split(' ').length).toEqual(1)
    expect(lastNames.fr.includes(result)).toEqual(true)
  })

  it('returns an random  italian last name from nationaility defined', () => {
    const result = last({ nationality: 'it' })
    expect(typeof result).toEqual('string')
    expect(result.length).toBeGreaterThanOrEqual(2)
    expect(result.length).toBeLessThanOrEqual(20)
    expect(result.split(' ').length).toEqual(1)
    expect([...lastNames.it].includes(result)).toEqual(true)
  })
})
