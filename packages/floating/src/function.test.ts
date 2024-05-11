import { times } from '@chancejs/generator'
import { FloatingOptionsException } from './exceptions'
import { floating } from './function'

describe('floating function', () => {
  it('returns a random floating', () => {
    expect(typeof floating()).toBe('number')
  })

  it('can take both a max and min and obey them both', () => {
    times(1000, () => {
      let n = floating({ min: 90, max: 100 })
      expect(n).toBeGreaterThan(89)
      expect(n).toBeLessThan(101)
    })
  })

  it('can take both a max and min and obey them both', () => {
    times(1000, () => {
      let n = floating({ min: 0, max: 100 })
      expect(n).toBeGreaterThanOrEqual(0)
      expect(n).toBeLessThanOrEqual(101)
    })
  })

  it('can take both a max and min and obey them both', () => {
    times(1000, () => {
      let n = floating({ min: -100, max: 0 })
      expect(n).toBeGreaterThanOrEqual(-100)
      expect(n).toBeLessThanOrEqual(0)
    })
  })

  it('will not take fixed + min that would be out of range', () => {
    expect(() => floating({ fixed: 13, min: -9007199254740992 })).toThrow(
      'Chance: Min cannot be less than -9007199254740991.'
    )
  })

  it('will not take fixed + max that would be out of range', () => {
    expect(() =>
      floating({ fixed: 13, max: Number.MAX_SAFE_INTEGER + 1 })
    ).toThrow(
      `Chance: Max specified is out of range with fixed. Max should be, at most, ${Number.MAX_SAFE_INTEGER}.`
    )
  })

  it('obeys the fixed parameter, when present', () => {
    times(1000, () => {
      let n = floating({ fixed: 4 })
      let decimals = n.toString().split('.')[1] || ''
      expect(decimals.length).toBeLessThan(5)
    })
  })

  it('can take fixed and obey it', () => {
    times(1000, () => {
      let n = floating({ fixed: 3 })
      let parsed = parseFloat(n.toFixed(3))
      expect(n).toBe(parsed)
    })
  })

  it('will not take both fixed and precision', () => {
    expect(() => floating({ fixed: 2, precision: 8 })).toThrow(
      FloatingOptionsException
    )
  })
})
