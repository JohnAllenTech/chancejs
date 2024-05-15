export const luhn_check = (num: string): boolean => {
  const checkDigit: number = parseInt(num[num.length - 1], 10)
  const calculatedCheckDigit: number = calculateCheckDigit(
    num.substring(0, num.length - 1)
  )

  return checkDigit === calculatedCheckDigit
}

export const calculateCheckDigit = (number: string): number => {
  const digits: string[] = number
    .substring(0, number.length - 1)
    .split('')
    .reverse()
  let sum: number = 0

  for (let i: number = 0; i < digits.length; i++) {
    let digit: number = parseInt(digits[i], 10)
    if (i % 2 !== 0) {
      digit *= 2
      if (digit > 9) {
        digit -= 9
      }
    }
    sum += digit
  }

  return (sum * 9) % 10
}
