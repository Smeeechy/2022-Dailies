/* Mastermind is a two-player game in which the first player attempts to guess the secret code of the second. In this 
version, the code may be any six-digit number with all distinct digits.

Each turn the first player guesses some number, and the second player responds by saying how many digits in this number 
correctly matched their location in the secret code. For example, if the secret code were 123456, then a guess of 175286 
would score two, since 1 and 6 were correctly placed.

Write an algorithm which, given a sequence of guesses and their scores, determines whether there exists some secret code 
that could have produced them.

For example, for the following scores you should return True, since they correspond to the secret code 123456:

{175286: 2, 293416: 3, 654321: 0}
However, it is impossible for any key to result in the following scores, so in this case you should return False:

{123456: 4, 345678: 4, 567890: 4}
*/

const args = process.argv.slice(2)
let dict = {}
for (let i = 0; i + 1 < args.length; i += 2) {
    dict[args[i]] = parseInt(args[i + 1])
}

let sixDigitNums = [...Array(900_000).keys()].map(n => (n + 100_000).toString())
Object.entries(dict).forEach(([key, value]) => sixDigitNums = sixDigitNums.filter(n => compare(n, key) == value))

if (sixDigitNums.length > 0) {
    console.log(`There are ${sixDigitNums.length} possible solutions:`, sixDigitNums)
} else {
    console.log('There are no possible solutions with the given parameters.')
}

function compare(num1, num2) {
    let similar = 0
    for (let i = 0; i < num1.length; i++) {
        if (num1[i] == num2[i]) similar += 1
    }
    return similar
}
