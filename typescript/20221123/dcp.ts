/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection 
between a letter in pattern and a non-empty word in s.
*/

type _Map = { [key: string]: string }

export const wordPattern = (pattern: string, s: string): boolean => {
  const patternToWords: _Map = {}
  const wordsToPattern: _Map = {}
  const words = s.split(/\s+/)
  if (pattern.length !== words.length) return false
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] in patternToWords !== words[i] in wordsToPattern) return false
    if (
      pattern[i] in patternToWords &&
      words[i] in wordsToPattern &&
      (patternToWords[pattern[i]] !== words[i] || wordsToPattern[words[i]] !== pattern[i])
    ) {
      return false
    } else {
      patternToWords[pattern[i]] = words[i]
      wordsToPattern[words[i]] = pattern[i]
    }
  }
  return true
}

const args = process.argv.slice(2)
const pattern = args[0]
const s = args[1]
const result = wordPattern(pattern, s)
console.log(result)
