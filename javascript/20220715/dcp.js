/*
Given a list of words, return an array of the minimum characters needed to form all the words.

['free', 'fire', 'fun'] => ['f', 'r', 'e', 'e', 'i', 'u', 'n']

The characters can be in any order.
*/

const minimumCharactersForWords = words => {
  const minChars = []
  for (let word of words) {
    const needed = []
    for (let char of word) {
      if (minChars.includes(char)) minChars.splice(minChars.indexOf(char), 1)
      needed.push(char)
    }
    minChars.push(...needed)
  }
  return minChars
}

const args = process.argv.slice(2)
const words = args
const result = minimumCharactersForWords(words)
console.log(result)