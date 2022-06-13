/*
Given an array of distinct integers, return an array of all permutations of it in no particular order.
*/

const getPermutations = array => {
    if (array.length === 0) return array
    return permsRec([], array).flat(array.length - 1)
}

const permsRec = (current, remaining) => {
    if (remaining.length === 0) return current
    let perms = []
    for (const el of remaining) {
        const newCurrent = current.concat(el)
        const newRemaining = remaining.filter(e => e !== el)
        perms.push(permsRec(newCurrent, newRemaining))
    }
    return perms
}

const args = process.argv.slice(2)
const arr = args.map(Number)
const result = getPermutations(arr)
console.log(result)