/*
Determine if a string contains balanced (), [], and {}.
*/

const balancedBrackets = string => {
  string = string.replaceAll(/[a-zA-Z0-9%&@]/g, '')
  if (string.length % 2 === 1) return false
  while (string.length > 0) {
    const len = string.length
    string = string
      .replaceAll('()', '')
      .replaceAll('[]', '')
      .replaceAll('{}', '')
    if (string.length === len && string.length !== 0) return false
  }
  return true
}

const args = process.argv.slice(2)
const str = args[0]
const result = balancedBrackets(str)
console.log(result)