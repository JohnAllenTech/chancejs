import { times } from '@chancejs/generator'
import { semver } from './semver'

describe('Testing semver function', () => {
  it('returns a valid semver string', () => {
    times(1000, () => {
      const result = semver()
      expect(typeof result).toEqual('string')
      expect(/[0-9]+\.[0-9]+\.[0-9]+/.test(result)).toBe(true)
    })
  })

  it('returns a semver string with a specified range', () => {
    times(1000, () => {
      const result = semver({ range: '<=' })
      expect(typeof result).toEqual('string')
      expect(/^<=[0-9]+\.[0-9]+\.[0-9]+/.test(result)).toBe(true)
    })
  })

  it('returns a semver string with a prerelease flag', () => {
    times(1000, () => {
      const result = semver({ range: '<=', include_prerelease: true })
      expect(typeof result).toEqual('string')
      expect(/^<=[0-9]+\.[0-9]+\.[0-9]+-?(dev|beta|alpha)?/.test(result)).toBe(
        true
      )
    })
  })

  it('returns a semver string with a prerelease flag without range specified', () => {
    times(1000, () => {
      const result = semver({ include_prerelease: true })
      expect(typeof result).toEqual('string')
      expect(/[0-9]+\.[0-9]+\.[0-9]+-?(dev|beta|alpha)?/.test(result)).toBe(
        true
      )
    })
  })
})
