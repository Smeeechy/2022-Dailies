/*
Given a string, reverse the ordering of all words within it.
Words can contain special characters.
Whitespace should be preserved.
You are not allowed to use split() or reverse().
*/

const reverseWordsInString = string => {
  const stack = []
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      let whitespace = ''
      while (i < string.length && string[i] === ' ') whitespace += string[i++]
      stack.push(whitespace)
    } else {
      let word = ''
      while (i < string.length && string[i] !== ' ') word += string[i++]
      stack.push(word)
    }
    i--
  }
  let result = ''
  while (stack.length > 0) result += stack.pop()
  return result
}

const args = process.argv.slice(2)
const string = args[0]
const result = reverseWordsInString(string)
console.log(result)