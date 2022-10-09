/*
Sort the input list of strings (from shortest to longest string) in order to simplify the problem. 
Iterate through the list of sorted strings, and for each string, compute the longest string chain 
that starts with itself. To do so, try removing every letter from each string and seeing if the 
resulting strings are in the input list of strings; you can do so in constant time by dumping every 
string in a hash table. In the hash table, store the longest string chain of every string as you compute 
them. As you iterate through longer strings, whenever you find a shorter string for which you've already 
computed the longest string chain, you can very quickly append the longer string to that already-computed 
string chain. Do this for every string, and you'll eventually find the longest string chain that you're 
looking for.
*/

export const longestStringChain = (strings: string[]): string[] => {
  strings.sort((a, b) => a.length - b.length)
  const map: { [key: string]: string[] } = Object.fromEntries(strings.map(s => [s, [s]]))
  for (let i = 0; i < strings.length; i++) {
    const string = strings[i]
    for (let j = 0; j < string.length; j++) {
      const newString = `${string}`.replace(string.charAt(j), '')
      if (newString in map && map[newString].length + 1 > map[string].length) map[string] = [string, ...map[newString]]
    }
  }
  const result = Object.entries(map)
    .map(([, stringChain]) => stringChain)
    .sort((a, b) => a.length - b.length)
    .pop()!
  return result.length === 1 ? [] : result
}

const args = process.argv.slice(2)
const result = longestStringChain(args)
console.log(result)
