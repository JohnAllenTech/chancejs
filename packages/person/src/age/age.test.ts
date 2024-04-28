import { age } from './age'
import { ageRanges } from './constants'

describe('Testing Person Age', () => {
  it('returns an random age that is within the default range', () => {
    const a = age()
    expect(typeof a).toEqual('number')
    expect(a).toBeGreaterThan(ageRanges.ADULT_AGE_MIN)
    expect(a).toBeLessThan(ageRanges.ADULT_AGE_MAX)
  })
  it('returns an random age that is within the child range', () => {
    const a = age({ type: 'child' })
    expect(typeof a).toEqual('number')
    expect(a).toBeGreaterThan(ageRanges.CHILD_AGE_MIN)
    expect(a).toBeLessThan(ageRanges.CHILD_AGE_MAX)
  })

  it('returns an random age that is within the adult range', () => {
    const a = age({ type: 'adult' })
    expect(typeof a).toEqual('number')
    expect(a).toBeGreaterThan(ageRanges.ADULT_AGE_MIN)
    expect(a).toBeLessThan(ageRanges.ADULT_AGE_MAX)
  })

  it('returns an random age that is within the senior range', () => {
    const a = age({ type: 'senior' })
    expect(typeof a).toEqual('number')
    expect(a).toBeGreaterThan(ageRanges.SENIOR_AGE_MIN)
    expect(a).toBeLessThan(ageRanges.SENIOR_AGE_MAX)
  })

  it('returns an random age that is within the total range', () => {
    const a = age({ type: 'all' })
    expect(typeof a).toEqual('number')
    expect(a).toBeGreaterThan(ageRanges.AGE_MIN)
    expect(a).toBeLessThan(ageRanges.AGE_MAX)
  })
})
