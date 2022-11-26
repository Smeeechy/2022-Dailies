/*
Given an array of strings words, return the words that can be typed using 
letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".
*/

export const findWords = (words: string[]): string[] => {
  const result: string[] = []
  const firstRow = 'qwertyuiop'.split('')
  const secondRow = 'asdfghjkl'.split('')
  const thirdRow = 'zxcvbnm'.split('')
  for (const word of words) {
    let valid = true
    let row: string[]
    if (firstRow.includes(word[0].toLowerCase())) row = firstRow
    else if (secondRow.includes(word[0].toLowerCase())) row = secondRow
    else row = thirdRow
    for (let i = 1; i < word.length; i++) {
      if (!row.includes(word[i].toLowerCase())) {
        valid = false
        break
      }
    }
    if (valid) result.push(word)
  }
  return result
}

const args = process.argv.slice(2)
const result = findWords(args)
console.log(result)
