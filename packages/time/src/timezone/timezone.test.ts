import { timezone } from './timezone'

describe('Testing Time Timezone function', () => {
  it('returns an random timezone', () => {
    const result = timezone()
    expect(typeof result).toEqual('object')
    expect(typeof result.name).toEqual('string')
    expect(result.abbr.length).toBeLessThan(6)
    expect(typeof result.offset).toEqual('number')
    expect(typeof result.utc).toEqual('object')
    expect(typeof result.utc.pop()).toEqual('string')
  })
})
