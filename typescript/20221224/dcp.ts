/*
We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.
*/

export const detectCapitalUse = (word: string): boolean => {
  const allCaps = /^[A-Z]+$/
  const noCaps = /^[a-z]+$/
  const firstCap = /^[A-Z][a-z]+$/
  return allCaps.test(word) || noCaps.test(word) || firstCap.test(word)
}

const args = process.argv.slice(2)
const word = args[0]
const result = detectCapitalUse(word)
console.log(result)
