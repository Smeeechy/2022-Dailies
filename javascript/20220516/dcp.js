/*
The ancient Egyptians used to express fractions as a sum of several terms where each numerator is one. For example, 4 / 13 can be represented as 1 / 4 + 1 / 18 + 1 / 468.

Create an algorithm to turn an ordinary fraction a / b, where a < b, into an Egyptian fraction.
*/

const args = process.argv.slice(2)
const [a, b, precision=1000000] = args.map(Number)

// results are approximate but pretty damn close. floats are hard
const convertToEgyptionFraction = (a, b) => {
    let fractions = []
    let remaining = a / b
    let denominator = 2
    while (remaining > 0 && denominator < precision) {
        const current = Math.round((1 / denominator) * precision) / precision
        const remaining = Math.round(remaining * precision) / precision
        if (current <= remaining) {
            fractions.push(denominator)
            remaining -= 1 / denominator
        }
        denominator++
    }
    return fractions
}

const result = convertToEgyptionFraction(a, b)
// const approximation = result.reduce((total, next) => total += 1 / next, 0)
result.forEach(denom => console.log(`1 / ${denom}`))