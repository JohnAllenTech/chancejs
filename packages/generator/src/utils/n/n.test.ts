import { n } from './n'

const chance = {
  email: () => 'test@test.com',
}

describe('Testing n function', () => {
  it('returns an array of n terms for the given function', () => {
    const arr = n(chance.email, 25)
    expect(Array.isArray(arr)).toEqual(true)
    expect(arr.length).toEqual(25)
    arr.forEach((email: string) => {
      expect(/test\.com$/.test(email)).toEqual(true)
      expect(typeof email).toEqual('string')
    })
  })

  it('returns an array of 1 when n is not given', () => {
    const arr = n(chance.email)
    expect(Array.isArray(arr)).toEqual(true)
    expect(arr.length).toEqual(1)
  })

  it('returns an empty array when n is set to 0', () => {
    const arr = n(chance.email, 0)
    expect(Array.isArray(arr)).toEqual(true)
    expect(arr.length).toEqual(0)
  })
})
