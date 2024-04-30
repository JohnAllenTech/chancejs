import { firstNames } from './constants'
import { first } from './first'

describe('Testing First First function', () => {
  it('returns an random english first name when no options given', () => {
    const result = first()
    expect(typeof result).toEqual('string')
    expect(result.length).toBeGreaterThanOrEqual(2)
    expect(result.length).toBeLessThanOrEqual(20)
    expect(result.split(' ').length).toEqual(1)
    expect(
      [...firstNames.male.en, ...firstNames.female.en].includes(result)
    ).toEqual(true)
  })

  it('returns an random first name from nationaility defined', () => {
    const result = first({ nationality: 'fr' })
    expect(typeof result).toEqual('string')
    expect(result.length).toBeGreaterThanOrEqual(2)
    expect(result.length).toBeLessThanOrEqual(20)
    expect(result.split(' ').length).toEqual(1)
    expect(
      [...firstNames.male.fr, ...firstNames.female.fr].includes(result)
    ).toEqual(true)
  })

  it('returns an random english first name from gender defined', () => {
    const result = first({ gender: 'female' })
    expect(typeof result).toEqual('string')
    expect(result.length).toBeGreaterThanOrEqual(2)
    expect(result.length).toBeLessThanOrEqual(20)
    expect(result.split(' ').length).toEqual(1)
    expect([...firstNames.female.en].includes(result)).toEqual(true)
  })

  it('returns an random female italian first name ', () => {
    const result = first({ gender: 'female', nationality: 'it' })
    expect(typeof result).toEqual('string')
    expect(result.length).toBeGreaterThanOrEqual(2)
    expect(result.length).toBeLessThanOrEqual(20)
    expect(result.split(' ').length).toEqual(1)
    expect([...firstNames.female.it].includes(result)).toEqual(true)
  })
})
