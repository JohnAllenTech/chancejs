interface Pattern {
  regex: RegExp
  mask: string
}

const patterns: Pattern[] = [
  { regex: /^01(?:[123]\d{3}|\d{4}) \d{3,6}$/, mask: '01### #####' },
  { regex: /^01(?:[123]\d{3}|\d{4})\d{3,6}$/, mask: '01#######' },
  { regex: /^02\d \d{4} \d{4}$/, mask: '02# #### ####' },
  { regex: /^02\d\d{4}\d{4}$/, mask: '02########' },
  { regex: /^03\d{2} \d{4} \d{4}$/, mask: '03## ### ####' },
  { regex: /^03\d{2}\d{4}\d{4}$/, mask: '03########' },
  { regex: /^05\d{4} \d{5}$/, mask: '05### ######' },
  { regex: /^05\d{4}\d{5}$/, mask: '05#######' },
  { regex: /^0500 \d{6}$/, mask: '0500 ######' },
  { regex: /^0500\d{6}$/, mask: '0500######' },
  { regex: /^07\d{3} \d{6}$/, mask: '07### ######' },
  { regex: /^07\d{4}\d{6}$/, mask: '07#######' },
  { regex: /^08\d{2} \d{3} \d{3,4}$/, mask: '08## ### ####' },
  { regex: /^08\d{2}\d{3}\d{3,4}$/, mask: '08########' },
  { regex: /^09\d{2} \d{3} \d{3}$/, mask: '09## ### ###' },
  { regex: /^09\d{2}\d{3}\d{3}$/, mask: '09########' },
]

export function isValid(phoneNumber: string): boolean {
  return patterns.some(pattern => pattern.regex.test(phoneNumber))
}

export const format = (
  phoneNumber: string,
  separator: string = ' '
): string => {
  let _patterns = patterns.slice().reverse()

  for (const pattern of _patterns) {
    let phoneNumberDigits = phoneNumber
      .replace(/[()\[\]\-_A-Za-z ]/gi, '')
      .split('')
    let maskDigits = pattern.mask.split('')

    maskDigits.forEach((char, i) => {
      if (char === ' ') {
        phoneNumberDigits.splice(i, 0, ' ')
      }
    })

    let formattedPhoneNumber = phoneNumberDigits.join('')

    if (pattern.regex.test(formattedPhoneNumber)) {
      return formattedPhoneNumber.replace(/ /g, separator)
    }
  }

  return phoneNumber
}
