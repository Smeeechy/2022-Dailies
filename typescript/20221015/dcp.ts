/*
Given a sentence where every word contains a number between 1 and 9 inclusive,
return a new string with the words ordered by the numbers they contain.
*/

export const order = (words: string): string => {
  const result = words
    .split(/\s+/)
    .map(word => [word.replace(/[a-zA-Z]/g, ''), word])
    .sort(([a], [b]) => parseInt(a) - parseInt(b))
    .map(array => array[1])
    .join(' ')

  return result
}

const args = process.argv.slice(2)
const result = order(args.join(' '))
console.log(result)
