/*
Given an arithmetic expression in Reverse Polish Notation, write a program to evaluate it.

The expression is given as a list of numbers and operands. For example: [5, 3, '+'] should return 5 + 3 = 8.

For example, 
[15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-'] should return 5, since it is equivalent to 
((15 / (7 - (1 + 1))) * 3) - (2 + (1 + 1)) = 5.

You can assume the given expression is always valid.
*/

const args = process.argv.slice(2)
const inputAsStringArray = args[0].split(' ')
const result = parseReversePolish(inputAsStringArray)
console.log(result)

function parseReversePolish(input) {
    let parsed = [...input].map(el => isNaN(parseInt(el)) ? el : parseInt(el))
    console.log(parsed)
    while (parsed.length > 1) {
        for (let i = 0; i + 2 < parsed.length; i++) {
            const result = evaluate(parsed[i], parsed[i + 1], parsed[i + 2])
            if (!isNaN(result)) {
                parsed.splice(i, 3, result)
                break
            }
        }
        console.log(parsed)
    }
    return parsed[0]
}

function evaluate(x, y, op) {
    switch (op) {
        case '+':
            return x + y
        case '-':
            return x - y
        case '*':
            return x * y
        case '/':
            return x / y
        default:
            return NaN
    }
}