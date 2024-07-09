import { times } from '@chancejs/generator'
import { iban } from './iban'

describe('Testing Finance Iban function', () => {
  it('returns an random iban', () => {
    times(1000, () => {
      const result = iban()
      expect(typeof result).toEqual('string')
      expect(
        /^[A-Z]{2}[0-9]{2}[A-Z0-9]{4}[0-9]{1,26}$/.test(result)
      ).toBeTruthy()
    })
  })
})
