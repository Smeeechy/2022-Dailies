/*
Given a 'big' string and a list of 'small' strings, return an array of the same size as the 
list of small strings with a boolean at each index representing whether or not the string at
that index is contained in the big string.
ex:   'this is a big string'
and   ['this', 'yo',  'is', 'a',  'bigger', 'string', 'kappa']
===>  [true,   false, true, true, false,    true,     false]
*/

// this is a naive approach. a more efficient approach would use suffix tries
export const multiStringSearch = (bigString: string, smallStrings: string[]): boolean[] => {
  const result: boolean[] = []
  for (let i = 0; i < smallStrings.length; i++) {
    const smallString = smallStrings[i]
    let included = false
    for (let j = 0; j < bigString.length; j++) {
      if (bigString.slice(j).startsWith(smallString)) {
        included = true
        break
      }
    }
    result[i] = included
  }
  return result
}

const args = process.argv.slice(2)
const bigString = args[0]
const smallStrings = args.slice(1)
const result = multiStringSearch(bigString, smallStrings)
console.log(result)
