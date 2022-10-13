/*
Given a string, find the longest substring within it that contains all unique characters.
*/

export const longestSubstringWithoutDuplication = (string: string): string => {
  let best = ''
  let startIndex = 0
  const map: { [key: string]: number } = {}
  for (let i = 0; i < string.length; i++) {
    const char = string[i]
    if (char in map) startIndex = Math.max(startIndex, map[char] + 1)
    const substring = string.slice(startIndex, i + 1)
    if (substring.length > best.length) best = substring
    map[char] = i
  }
  return best
}

const args = process.argv.slice(2)
const string = args[0]
const result = longestSubstringWithoutDuplication(string)
console.log(result)
