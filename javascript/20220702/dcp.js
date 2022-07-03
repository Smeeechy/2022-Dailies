/*
Create a caesar cipher encryptor.
*/

const caesarCipherEncryptor = (string, key) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const result = []
    for (const char of string) result.push(alphabet[(alphabet.indexOf(char) + key) % 26])
    return result.join('')
}

const args = process.argv.slice(2)
const string = args[0]
const key = parseInt(args[1])
const result = caesarCipherEncryptor(string, key)
console.log(result)