import { phone } from './phone'
import { format, isValid } from './utils/phoneNumber'
import { times } from '@johnallentech/generator'

describe('Testing Phone Phone function', () => {
  it('returns a string', () => {
    const result = phone()
    expect(typeof result).toEqual('string')
  })

  it('looks like an actual phone number', () => {
    const result = phone()
    expect(
      /^([2-9][0-8][0-9])?[\-. ]?([2-9][0-9]{2,2})[\-. ]?([0-9]{4,4})$/.test(
        result
      )
    ).toBe(true)
  })

  it('obeys formatted option', () => {
    times(1000, () => {
      const result = phone({ formatted: false })
      expect(typeof result).toEqual('string')
      expect(/^[2-9][0-8]\d[2-9]\d{6,6}$/.test(result)).toBe(true)
    })
  })

  it('obeys formatted option and parens option', () => {
    times(1000, () => {
      const result = phone({ formatted: false, parens: true })
      expect(typeof result).toEqual('string')
      expect(/^[2-9][0-8]\d[2-9]\d{6,6}$/.test(result)).toBe(true)
    })
  })

  it('obeys exampleNumber option', () => {
    times(1000, () => {
      const result = phone({ exampleNumber: true })
      expect(typeof result).toEqual('string')
      expect(
        /^555?[\-. ]?([2-9][0-9]{2,2})[\-. ]?([0-9]{4,4})$/.test(result)
      ).toBe(true)
    })
  })

  it('obeys formatted option and exampleNumber option', () => {
    times(1000, () => {
      const phoneNum = phone({ exampleNumber: true, formatted: false })
      expect(typeof phoneNum).toEqual('string')
      expect(/^555[2-9]\d{6,6}$/.test(phoneNum)).toBe(true)
    })
  })

  it('with uk option works', () => {
    expect(typeof phone({ country: 'uk' })).toEqual('string')
  })

  it('with uk option works and mobile option', () => {
    expect(typeof phone({ country: 'uk', mobile: true })).toEqual('string')
  })

  it('with uk country looks right', () => {
    times(1000, () => {
      expect(isValid(format(phone({ country: 'uk' })))).toBe(true)
    })
  })

  it('with uk country unformatted looks right', () => {
    const result = format(phone({ country: 'uk', formatted: false }))
    expect(typeof result).toBe('string')
    expect(isValid(result)).toBe(true)
  })

  it('with uk country and mobile option looks right', () => {
    times(1000, () => {
      expect(isValid(phone({ country: 'uk', mobile: true }))).toBe(true)
    })
  })

  it('with uk country and mobile option unformatted looks right', () => {
    times(1000, () => {
      expect(
        isValid(
          format(phone({ country: 'uk', mobile: true, formatted: false }))
        )
      ).toBe(true)
      expect(true).toBe(true)
    })
  })

  it('with fr country works', () => {
    expect(typeof phone({ country: 'fr' })).toEqual('string')
  })

  it('with fr country works with mobile option', () => {
    expect(typeof phone({ country: 'fr', mobile: true })).toEqual('string')
  })

  it('with fr country looks right', () => {
    times(1000, () => {
      expect(/0[123459]..(..)..(..)/.test(phone({ country: 'fr' }))).toBe(true)
    })
  })

  it('with fr country looks right unformatted', () => {
    times(1000, () => {
      expect(
        /0........./.test(phone({ country: 'fr', formatted: false }))
      ).toBe(true)
    })
  })

  it('with fr country on mobile looks right', () => {
    times(1000, () => {
      const result = phone({ country: 'fr', mobile: true })
      expect(/0[67]\d{8}/.test(result)).toBe(true)
    })
  })

  it('with fr country on mobile, unformatted looks right', () => {
    times(1000, () => {
      const result = phone({
        country: 'fr',
        mobile: true,
        formatted: false,
      })
      expect(/0[67]\d{8}/.test(result)).toBe(true)
    })
  })

  it('with br country option works', () => {
    expect(typeof phone({ country: 'br' })).toEqual('string')
  })

  it('with br country and mobile option works', () => {
    expect(typeof phone({ country: 'br', mobile: true })).toEqual('string')
  })

  it('with br country and formatted false option return a correct format', () => {
    expect(
      /([0-9]{2})([2-5]{1})([0-9]{3})([0-9]{4})/.test(
        phone({ country: 'br', mobile: false, formatted: false })
      )
    ).toBe(true)
  })

  it('with br country, formatted false and mobile option return a correct format', () => {
    expect(
      /([0-9]{2})\9([0-9]{4})([0-9]{4})/.test(
        phone({ country: 'br', mobile: true, formatted: false })
      )
    ).toBe(true)
  })

  it('with br country and formatted option apply the correct mask', () => {
    expect(
      /\(([0-9]{2})\) ([2-5]{1})([0-9]{3})\-([0-9]{4})/.test(
        phone({ country: 'br', mobile: false, formatted: true })
      )
    ).toBe(true)
  })

  it('with br country, formatted and mobile option apply the correct mask', () => {
    expect(
      /\(([0-9]{2})\) 9([0-9]{4})\-([0-9]{4})/.test(
        phone({ country: 'br', mobile: true, formatted: true })
      )
    ).toBe(true)
  })
})
