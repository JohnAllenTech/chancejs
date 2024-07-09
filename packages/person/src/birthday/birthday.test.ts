import { birthday } from './birthday'
import { ageRanges } from '../age/constants'
import { times } from '@johnallentech/generator'

const age = (dt: Readonly<Date>) => {
  // - uses the format returned by ymd, instead of Date -- improves speed between 30% and 60%
  // - uses `today` as a closure -- considers current date constant, each time the test suit runs
  const dob = ymd(dt)
  const completed = today.m > dob.m || (today.m === dob.m && today.d >= dob.d)
  return today.y - dob.y - (completed ? 0 : 1)
}

const ymd = (dt: Readonly<Date>) => ({
  y: dt.getFullYear(),
  m: dt.getMonth(),
  d: dt.getDate(),
})
const now = Object.freeze(new Date())
const today = ymd(now)

function ageRangeToEpoch(
  minAge: number,
  maxAge: number
): { min: number; max: number } {
  const now = new Date()
  const currentYear = now.getFullYear()
  const minDate = new Date(
    currentYear - maxAge - 1,
    now.getMonth(),
    now.getDate()
  )
  const maxDate = new Date(currentYear - minAge, now.getMonth(), now.getDate())

  const min = Math.floor(minDate.getTime())
  const max = Math.floor(maxDate.getTime())

  return { min, max }
}

describe('Testing Birthday Birthday function', () => {
  const currentYear = new Date().getFullYear()
  it('returns an random birthday', () => {
    times(1000, () => {
      const result = birthday()
      expect(typeof result).toEqual('object')
      const year = result.getFullYear()
      expect(result.getFullYear()).toBeLessThan(currentYear)
      expect(result.getFullYear()).toBeGreaterThan(
        currentYear - ageRanges.AGE_MAX
      )
      expect(year).toBeLessThan(currentYear)
    })
  })

  it('can have a string returned', () => {
    times(1000, () => {
      const result = birthday({ string: true })
      expect(typeof result).toEqual('string')
      expect(typeof result).not.toEqual('object')
      expect(
        // fixme
        /^[0-9][0-9]?\/[0-9][0-9]?\/[0-9]{4}/m.test(result as unknown as string)
      ).toEqual(true)
    })
  })

  it('can have a year specified', () => {
    times(1000, () => {
      const year = Math.floor(Math.random() * 1100) + 1000
      const result = birthday({ year })
      expect(result.getFullYear()).toEqual(year)
    })
  })

  it('can have a year specified', () => {
    times(1000, () => {
      const result = birthday({ type: 'adult' })
      const { min, max } = ageRangeToEpoch(
        ageRanges.ADULT_AGE_MIN,
        ageRanges.ADULT_AGE_MAX
      )
      expect(result.getTime()).toBeGreaterThanOrEqual(min)
      expect(result.getTime()).toBeLessThanOrEqual(max)
    })
  })

  it('can have an age range specified for a teen', () => {
    times(1000, () => {
      const result = birthday({ type: 'teen' })
      const { min, max } = ageRangeToEpoch(
        ageRanges.TEEN_AGE_MIN,
        ageRanges.TEEN_AGE_MAX
      )
      expect(result.getTime()).toBeGreaterThanOrEqual(min)
      expect(result.getTime()).toBeLessThanOrEqual(max)
    })
  })

  it('can have an age range specified for a child', () => {
    times(1000, () => {
      const result = birthday({ type: 'child' })
      const { min, max } = ageRangeToEpoch(
        ageRanges.CHILD_AGE_MIN,
        ageRanges.CHILD_AGE_MAX
      )
      expect(result.getTime()).toBeGreaterThanOrEqual(min)
      expect(result.getTime()).toBeLessThanOrEqual(max)
    })
  })

  it('can have an age range specified for a senior', () => {
    times(1000, () => {
      const result = birthday({ type: 'senior' })
      const { min, max } = ageRangeToEpoch(
        ageRanges.SENIOR_AGE_MIN,
        ageRanges.SENIOR_AGE_MAX
      )
      expect(result.getTime()).toBeGreaterThanOrEqual(min)
      expect(result.getTime()).toBeLessThanOrEqual(max)
    })
  })

  it('an have an age range specified by minAge only', () => {
    times(1000, () => {
      const minAge = Math.floor(Math.random() * 30)
      const result = birthday({ minAge })
      const calculated = age(result)
      expect(calculated >= minAge).toEqual(true)
    })
  })

  it('an have an age range specified by maxAge only', () => {
    times(1000, () => {
      const maxAge = Math.floor(Math.random() * 90) + 1
      const result = birthday({ maxAge })
      const calculated = age(result)
      expect(calculated <= maxAge).toEqual(true)
    })
  })

  it('an have an age range specified by minAge and maxAge', () => {
    times(1000, () => {
      const minAge = Math.floor(Math.random() * 10)
      const result = birthday({ minAge, maxAge: minAge + 70 })
      const calculated = age(result)
      expect(calculated <= minAge + 70).toEqual(true)
      expect(calculated >= minAge).toEqual(true)
    })
  })
  it('throws an error if minAge < 0', () => {
    times(1000, () => {
      expect(() => birthday({ minAge: -1 })).toThrowError(
        'Chance: MinAge cannot be less than zero.'
      )
    })
  })

  it('throws an error if minAge > maxAge', () => {
    times(1000, () => {
      expect(() => birthday({ minAge: 30, maxAge: 10 })).toThrowError(
        'Chance: MinAge cannot be greater than MaxAge.'
      )
    })
  })
})
