/*
Given a string, find the longest palindromic contiguous substring. If there are more than one with the maximum length, return any one.

For example, the longest palindromic substring of "aabcdcb" is "bcdcb". The longest palindromic substring of "bananas" is "anana".
*/

const args = process.argv.slice(2)
const result = getLongestContiguousPalindromicSubstring(args[0])
console.log(result)

function getLongestContiguousPalindromicSubstring(str) {
    let longest = ''
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            let current = str.substring(i, j + 1)
            if (isPalindrome(current) && current.length > longest.length) {
                longest = current
            }
        }
    }
    return longest
}

function isPalindrome(str) {
    return str == [...str].reverse().join('')
}