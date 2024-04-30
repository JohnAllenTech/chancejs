// Delete if not needed
export const genderlessPrefixes = [{ name: 'Doctor', abbreviation: 'Dr.' }]

export const malePrefixes = [
  ...genderlessPrefixes,
  { name: 'Mister', abbreviation: 'Mr.' },
]

export const femalePrefixes = [
  ...genderlessPrefixes,
  { name: 'Miss', abbreviation: 'Miss' },
  { name: 'Misses', abbreviation: 'Mrs.' },
]

export const allPrefixes = [
  ...genderlessPrefixes,
  ...malePrefixes,
  ...femalePrefixes,
]
