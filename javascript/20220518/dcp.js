/*
Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid.
*/

const args = process.argv.slice(2)

const encode = str => {
    let char = str[0]
    let startIndex = 0
    for (let i = 0; i <= str.length; i++) {
        if (str[i] != char || i == str.length) {
            str = splice(str, startIndex, i - startIndex, `${i - startIndex}${char}`)
            i = startIndex + 2 + parseInt(Math.log10(i - startIndex))
            startIndex = i
            char = str[i]
        }
    }
    return str
}

const decode = str => {
    let newStr = []
    for (let i = 0; i + 1 < str.length; i += 2) {
        const count = parseInt(str[i])
        const char = str[i + 1]
        for (let j = 0; j < count; j++) newStr.push(char)
    }
    return newStr.join('')
}

const splice = (str, from, count, insert) => {
    const arr = str.split('')
    arr.splice(from, count, insert)
    return arr.join('')
}

for (let arg of args) {
    arg.match(/.*\d.*/g) ? console.log(arg, decode(arg)) : console.log(arg, encode(arg))
}