import { gender } from './gender'

describe('Testing Gender Gender function', () => {
  it('returns an random gender', () => {
    const result = gender()
    expect(typeof result).toEqual('string')
    expect(result).toMatch(/(Male|Female)/)
  })

  it('support extra genders', () => {
    const result = gender({ extraGenders: ['Unknown', 'Transgender'] })
    expect(typeof result).toEqual('string')
    expect(result).toMatch(/(Male|Female|Unknown|Transgender)/)
  })
})
