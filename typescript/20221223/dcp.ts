/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
*/

export const reverseVowels = (s: string): string => {
  const split = s.split('')
  const vowels = 'AEIOUaeiou'.split('')
  let left = 0
  let right = s.length - 1
  while (left < right) {
    while (left < right && !vowels.includes(split[left])) left++
    while (right > left && !vowels.includes(split[right])) right--
    swap(left++, right--, split)
  }
  return split.join('')
}

const swap = (left: number, right: number, split: string[]): string[] => {
  const temp = split[left]
  split[left] = split[right]
  split[right] = temp
  return split
}

const args = process.argv.slice(2)
const s = args[0]
const result = reverseVowels(s)
console.log(result)
