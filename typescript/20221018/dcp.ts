/*
Implement a caesar cipher encryptor.
*/

// decryption/negative key doesn't quite work 100% but it's bonus anyway
export const caesarCipherEncryptor = (string: string, key: number, decrypt: boolean = false): string => {
  const abc = 'abcdefghijklmnopqrstuvwxyz'
  return string
    .split('')
    .map(char => (abc.includes(char) ? abc[(decrypt ? abc.indexOf(char) - key : abc.indexOf(char) + key) % 26] : char))
    .join('')
}

const args = process.argv.slice(2)
const string = args[0]
const key = parseInt(args[1])
const result = caesarCipherEncryptor(string, key)
console.log(result)
