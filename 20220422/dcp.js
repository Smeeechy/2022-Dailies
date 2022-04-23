/*
Given a string, determine whether any permutation of it is a palindrome.

For example, carrace should return true, since it can be rearranged to form racecar, which is a palindrome. daily 
should return false, since there's no rearrangement that can form a palindrome.
*/

const args = process.argv.slice(2)
const str = args[0]
const result = hasPalindromePermutation(str)
console.log(result)

function hasPalindromePermutation(word) {
    chars = word.split('').sort()
    let single
    for (let i = 0; i + 1 < chars.length; i += 2) {
        if (chars[i] == chars[i + 1]) continue
        else if (!single) {
            single = chars[i--]
        } else return [false, '']
    }
    return [true, single]
}