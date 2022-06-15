/*
Write a function that takes two non-empty non-sorted integer arrays and returns a pair of elements (one from each array) with the smallest possible difference between them.
*/

const smallestDifference = (arrayOne, arrayTwo) => {
    let minPair = [Infinity, -Infinity]
    for (let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j++) {
            const minDist = Math.abs(minPair[0] - minPair[1])
            const dist = Math.abs(arrayOne[i] - arrayTwo[j])
            if (dist < minDist) minPair = [arrayOne[i], arrayTwo[j]]
        }
    }
    return minPair
}

const args = process.argv.slice(2)
const arr1 = JSON.parse(args[0])
const arr2 = JSON.parse(args[1])
const result = smallestDifference(arr1, arr2)
console.log(result)