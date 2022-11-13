/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
*/

export const lengthOfLastWord = (s: string): number => s.trim().split(/\s+/).pop()!.length

const args = process.argv.slice(2)
const result = lengthOfLastWord(args[0])
console.log(result)
