/*
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.
*/

export const reverseOnlyLetters = (s: string): string => {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    while (left < right && !/[a-zA-Z]/.test(s.charAt(left))) left++
    while (left < right && !/[a-zA-Z]/.test(s.charAt(right))) right--
    const split = s.split('')
    const temp = split[left]
    split[left] = split[right]
    split[right] = temp
    s = split.join('')
    left++
    right--
  }
  return s
}

const args = process.argv.slice(2)
const result = reverseOnlyLetters(args[0])
console.log(result)
