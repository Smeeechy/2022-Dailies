/*
Given an array of three elements representing sort order, and another array consisting of only those three elements, sort the array in linear time and constant space.
For example, given [x, y, z] and [y, y, x, y, z, x, z, z, x], return [x, x, x, y, y, y, z, z, z].
*/

const args = process.argv.slice(2)
const order = JSON.parse(args[0])
const array = JSON.parse(args[1])

console.log(array)
threeNumberSort(array, order)
console.log(array)

function threeNumberSort(array, order) {
    const counts = [0, 0, 0]
    for (let el of array) {
        if (el == order[0]) counts[0]++
        if (el == order[1]) counts[1]++
        if (el == order[2]) counts[2]++
    }
    let leftIndex = 0
    let middleIndex = counts[0]
    let rightIndex = counts[0] + counts[1]
    while (leftIndex < middleIndex) array[leftIndex++] = order[0]
    while (middleIndex < rightIndex) array[middleIndex++] = order[1]
    while (rightIndex < array.length) array[rightIndex++] = order[2]
}