import { times } from '@chancejs/generator'
import { cc_type } from './cc_type'

describe('cc_type() function', () => {
  it('returns a random credit card type', () => {
    times(1000, () => {
      expect(typeof cc_type()).toBe('string')
    })
  })

  it('can take a raw arg and obey it', () => {
    times(1000, () => {
      const type = cc_type({ raw: true })
      expect(type).toHaveProperty('name')
      expect(type).toHaveProperty('short_name')
      expect(type).toHaveProperty('prefix')
      expect(type).toHaveProperty('length')
    })
  })

  it('can take a name arg and obey it', () => {
    times(1000, () => {
      let type = cc_type({ name: 'Visa', raw: true })
      expect(type.name).toBe('Visa')
    })
  })

  it('with bogus type throws', () => {
    times(1000, () => {
      const fn = () => cc_type({ name: 'potato' })
      expect(fn).toThrowError(
        "Chance: Credit card type 'potato' is not supported"
      )
    })
  })
})
