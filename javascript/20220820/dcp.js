/*
Given a list of strings, return an array of arrays of anagrams of each other.
*/

const groupAnagrams = words => {
  const groups = {}
  for (let word of words) {
    const sortedWord = word.split('').sort().join('')
    if (sortedWord in groups) groups[sortedWord].push(word)
    else groups[sortedWord] = [word]
  }
  const result = []
  for (let group in groups) result.push(groups[group])
  return result
}

const args = process.argv.slice(2)
const result = groupAnagrams(args)
console.log(result)