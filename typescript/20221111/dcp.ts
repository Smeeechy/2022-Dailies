/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while 
preserving the order of characters. No two characters may map to the same character, 
but a character may map to itself.
*/

type CharMap = { [key: string]: string }

export const isIsomorphic = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) return false
  const map1: CharMap = {}
  const map2: CharMap = {}
  for (let i = 0; i < str1.length; i++) {
    let char1 = str1[i]
    let char2 = str2[i]
    if (!(char1 in map1) && !(char2 in map2)) {
      map1[char1] = char2
      map2[char2] = char1
    } else if (map1[char1] !== char2 || map2[char2] !== char1) return false
  }
  return true
}

const args = process.argv.slice(2)
const result = isIsomorphic(args[0], args[1])
console.log(result)
