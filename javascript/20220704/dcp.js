/*
Implement run-length string encoding.

However, as an extra challenge, represent run-lengths greater than 10 as consecutive pieces of 9 or less:
AAAAAAAAAAAAAAAAAAAA => 20A => 9A9A2A
*/

const runLengthEncoding = string => {
    const result = []
    let current = string[0]
    let count = 0
    for (let index in string) {
        if (string[index] === current) count++
        else {
            update(count, current, result)
            current = string[index]
            count = 1
        }
    }
    update(count, current, result)
    return result.join('')
}

const update = (count, char, array) => {
    while (count > 9) {
        array.push(9, char)
        count -= 9
    }
    array.push(count, char)
}

const args = process.argv.slice(2)
const string = args[0]
const result = runLengthEncoding(string)
console.log(result)