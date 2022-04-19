/*
An imminent hurricane threatens the coastal town of Codeville. If at most two people can fit in a rescue boat, and the 
maximum weight limit for a given boat is k, determine how many boats will be needed to save everyone.

For example, given a population with weights [100, 200, 150, 80] and a boat limit of 200, the smallest number of boats 
required will be three.
*/

const args = process.argv.slice(2)
const k = parseInt(args[0])
const popWeights = args.slice(1).map(Number).sort((a, b) => a - b)

let total = 0
let left = 0
let right = popWeights.length - 1

while (left < right) {
    let l = popWeights[right]
    let r = popWeights[left]
    if (r > (k - l)) {
        total += 1
        right -= 1
    } else {
        total += 1
        left += 1
        right -= 1
    }
}

console.log(`It would take ${total} boats to save everyone with those weights`)
