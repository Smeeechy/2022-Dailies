/*
Given a big string and a small string, find the smallest substring of the big string
that contains all the characters of the big string.
The substring can contain extra characters not contained in the smaller string.
*/

type Map = { [key: string]: number }

export const smallestSubstringContaining = (bigString: string, smallString: string): string => {
  const required = Object.seal(getCharacterMap(smallString))
  let current: Map
  let best = ''
  let l = 0
  let r = 0
  while (r <= bigString.length) {
    const substring = bigString.slice(l, r)
    current = getCharacterMap(substring)
    if (meetsRequirements(current, required)) {
      if (best.length === 0 || substring.length < best.length) best = substring
      l++
    } else r++
  }
  return best
}

const getCharacterMap = (string: string): Map => {
  const map: Map = {}
  for (let char of string) {
    if (char in map) map[char]++
    else map[char] = 1
  }
  return map
}

const meetsRequirements = (current: Map, required: Map): boolean => {
  for (let char in required) {
    if (!(char in current)) return false
    if (current[char] < required[char]) return false
  }
  return true
}

const args = process.argv.slice(2)
const bigString = args[0]
const smallString = args[1]
const result = smallestSubstringContaining(bigString, smallString)
console.log(result)
