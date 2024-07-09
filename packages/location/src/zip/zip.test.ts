import { times } from '@chancejs/generator'
import { zip } from './zip'

describe('Testing zip function', () => {
  it('returns a valid basic zip code', () => {
    times(1000, () => {
      const zipCode = zip()
      expect(typeof zipCode).toEqual('string')
      expect(zipCode.length).toEqual(5)
      expect(/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode)).toEqual(true)
    })
  })

  it('returns a valid extended zip code', () => {
    times(1000, () => {
      const zipCode = zip({ plusfour: true })
      expect(typeof zipCode).toEqual('string')
      expect(zipCode.length).toEqual(10)
      expect(/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode)).toEqual(true)
    })
  })
})
