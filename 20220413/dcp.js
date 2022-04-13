/*
Implement division of two positive integers without using the division, multiplication, or modulus operators. 
Return the quotient as an integer, ignoring the remainder.
*/

const args = process.argv.slice(2).map(Number)
const a = args[0];
const b = args[1];

const quotient = divide(a, b)
console.log(quotient)

function divide(a, b) {
    let count = 0
    let num = a
    while (num >= b) {
        count++
        num -= b
    }
    return count
}
