/*
A strobogrammatic number is a positive number that appears the same after being rotated 180 degrees. 
For example, 16891 is strobogrammatic.

Create a program that finds all strobogrammatic numbers with N digits.
*/

const args = process.argv.slice(2)
const n = parseInt(args[0])
let strobogrammatics = []
for (let i = Math.pow(10, n - 1); i < Math.pow(10, n); i++) {
    let rotated = rotateNumber(i)
    if (rotated == i) strobogrammatics.push(rotated)
}

console.log(strobogrammatics)

function rotateDigit(num) {
    switch (num) {
        case 0: return 0
        case 1: return 1
        case 2: return 5
        case 3: return -1
        case 4: return -1
        case 5: return 2
        case 6: return 9
        case 7: return -1
        case 8: return 8
        case 9: return 6
        default: return -1
    }
}

function rotateNumber(num) {
    let nums = [...String(num)].map(Number)
    let flipped = []
    for (let i = nums.length - 1; i >= 0; i--) {
        flipped.push(rotateDigit(nums[i]))
    }
    if (flipped.includes(-1)) return -1
    else return parseInt(flipped.join(''))
}