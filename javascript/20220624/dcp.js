/*
Given a string of integers, find all valid IP addresses that can be created from it.
*/

const prefixRemainderPairs = string => {
    if (string[0] === '0') return [[0, string.slice(1)]]
    const prefixes = []
    for (let i = 1; i <= 3; i++) {
        if (i > string.length) break
        let num = parseInt(string.slice(0, i))
        if (num < 256) prefixes.push([num, string.slice(i)])
    }
    return prefixes
}

const validIPAddressesRecursive = (current, remaining, validAddresses) => {
    if (current.length === 4) {
        if (remaining.length === 0) validAddresses.push(current.join('.'))
        return
    }
    let pairs = prefixRemainderPairs(remaining)
    if (pairs.length === 0) return
    pairs.forEach(pair => validIPAddressesRecursive([...current, pair[0]], pair[1], validAddresses))
}

const validIPAddresses = string => {
    const valid = []
    validIPAddressesRecursive([], string, valid)
    return valid
}

const args = process.argv.slice(2)
const str = args[0]
const result = validIPAddresses(str)
console.log(result)