/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

export const longestCommonPrefix = (strings: string[]): string => {
  let result = ''
  let i = 0
  while (true) {
    const char = strings[0][i]
    for (const str of strings) if (i >= str.length || str[i] !== char) return result
    result += char
    i++
  }
}

const args = process.argv.slice(2)
const result = longestCommonPrefix(args)
console.log(result)
