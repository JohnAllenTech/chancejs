import { name } from './name'

describe('Testing Name Name function', () => {
  it('returns an random full name', () => {
    const result = name()
    expect(typeof result).toEqual('string')
    expect(result.length).toBeGreaterThanOrEqual(2)
    expect(result.length).toBeLessThanOrEqual(30)
    expect(result.split(' ').length).toEqual(2)
    expect(/[a-zA-Z]+\ [a-zA-Z]+/.test(result)).toEqual(true)
  })

  it('returns an random full name with middle name', () => {
    const result = name({ middle: true })
    expect(typeof result).toEqual('string')
    expect(result.length).toBeGreaterThanOrEqual(3)
    expect(/[a-zA-Z]+\ [a-zA-Z]+\ [a-zA-Z]+/.test(result)).toEqual(true)
  })

  it('returns an random full name with middle initial', () => {
    const result = name({ middle_initial: true })
    expect(typeof result).toEqual('string')
    expect(result.length).toBeGreaterThanOrEqual(3)
    expect(/[a-zA-Z]+\ [a-zA-Z]\.\ [a-zA-Z]+/.test(result)).toEqual(true)
    expect(result.split(' ')[1].length).toEqual(2)
  })

  it('returns an random full name with prefix', () => {
    const result = name({ prefix: true })
    expect(typeof result).toEqual('string')
    expect(result.length).toBeGreaterThanOrEqual(3)
    expect(/[a-zA-Z]{2,4}\.? [a-zA-Z]+\ [a-zA-Z]+/.test(result)).toEqual(true)
  })

  it('returns an random full name with suffix', () => {
    const result = name({ suffix: true })
    expect(typeof result).toEqual('string')
    expect(result.length).toBeGreaterThanOrEqual(3)
    expect(/[a-zA-Z]+\ [a-zA-Z]+\ [a-zA-Z\.]+/.test(result)).toEqual(true)
  })
})
