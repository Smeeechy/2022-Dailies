/*
Given a string paragraph and a string array of the banned words banned, return the most 
frequent word that is not banned. It is guaranteed there is at least one word that is not 
banned, and that the answer is unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase.
*/

export const mostCommonWord = (paragraph: string, banned: string[]): string => {
  const map: { [key: string]: number } = {}
  for (const word of banned.map(word => word.toLowerCase())) map[word] = -Infinity
  for (const word of paragraph.split(/[^a-zA-Z]+/).map(word => word.toLowerCase())) {
    if (word in map) map[word]++
    else map[word] = 1
  }
  let result!: string
  for (const key in map) if (!result || map[key] > map[result]) result = key
  return result
}

const args = process.argv.slice(2)
const result = mostCommonWord(args[0], args.slice(1))
console.log(result)
