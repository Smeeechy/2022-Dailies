/*
Given a positive integer N, find the smallest number of steps it will take to reach 1.

There are two kinds of permitted steps:

You may decrement N to N - 1.
If a * b = N, you may decrement N to the larger of a and b.
For example, given 100, you can reach 1 in five steps with the following route: 100 -> 10 -> 9 -> 3 -> 2 -> 1.
*/

const getFactors = num => {
    let factors = []
    for (let i = 2; i <= Math.sqrt(num); i++) {
        let quotient = num / i
        if (quotient == parseInt(quotient)) factors.push([quotient, i])
    }
    return factors
}

const getBestFactor = num => {
    let factors = getFactors(num)
    if (factors.length == 0) return num
    return factors.map(pair => Math.max(pair[0], pair[1])).sort((a, b) => a - b)[0]
}

// naive method
const decrement = num => {
    return Math.min(getBestFactor(num), num - 1)
}

const isPrime = num => {
    return getFactors(num).length == 0
}

const decrementRecursive = (chain, num) => {
    let newChain = [...chain, num]
    if (num == 1) return newChain
    if (isPrime(num)) return decrementRecursive(newChain, num - 1)
    else return decrementRecursive(newChain, getBestFactor(num))
}

const args = process.argv.slice(2)
let num = parseInt(args[0])
let chain = decrementRecursive([], num)
chain.forEach(n => console.log(n))

