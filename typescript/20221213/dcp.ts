/*
Given two strings ransomNote and magazine, return true if ransomNote can be 
constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

export const canConstruct = (ransomNote: string, magazine: string): boolean => {
  const splitMagazine = magazine.split('')
  for (const char of ransomNote) {
    const index = splitMagazine.findIndex(ch => ch === char)
    if (index === -1) return false
    splitMagazine.splice(index, 1, '')
  }
  return true
}

const args = process.argv.slice(2)
const ransomNote = args[0]
const magazine = args[1]
const result = canConstruct(ransomNote, magazine)
console.log(result)
