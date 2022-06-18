/*
Create an algorithm to efficiently compute the approximate median of a list of numbers.

More precisely, given an unordered list of N numbers, find an element whose rank is between N / 4 and 3 * N / 4, with a high level of certainty, in less than O(N) time.
*/

// gonna be honest i just looked up the median of medians algorithm on wikipedia and implemented that but it STILL DOESN'T WORK

const args = process.argv.slice(2)
const list = args.map(Number)
const result = select(list, 0, list.length - 1, list.length - 1)
console.log(result)

function select(list, left, right, n) {
    while (true) {
        if (left == right) return left
        let pivotIndex = pivot(list, left, right)
        pivotIndex = partition(list, left, right, pivotIndex, n)
        if (n == pivotIndex) return n
        else if (n < pivotIndex) right = pivotIndex - 1
        else left = pivotIndex + 1
    }
}

function pivot(list, left, right) {
    if (right - left < 5) return partition5(list, left, right)
    for (let i = left; i < right; i += 5) {
        let subRight = i + 4
        if (subRight > right) subRight = right
        let median5 = partition5(list, i, subRight)
        swap(list, median5, left + Math.floor((i - left) / 5))
    }
    let mid = (right - left) / 10 + left + 1
    return select(list, left, left + Math.floor((right - left) / 5), mid)
}

function partition(list, left, right, pivotIndex, n) {
    let pivotValue = list[pivotIndex]
    swap(list, pivotIndex, right)
    let storeIndex = left
    for (let i = left; i < right; i++) {
        if (list[i] < pivotValue) swap(list, storeIndex++, i)
    }
    let storeIndexEq = storeIndex
    for (let i = storeIndex; i < right; i++) {
        if (list[i] == pivotValue) swap(list, storeIndexEq++, i)
    }
    swap(list, right, storeIndexEq)
    if (n < storeIndex) return storeIndex
    if (n <= storeIndexEq) return n
    return storeIndexEq
}

function partition5(list, left, right) {
    let i = left + 1
    while (i <= right) {
        let j = i++
        while (j > left && list[j - 1] > list[j]) swap(list, j - 1, j--)
    }
    return Math.floor((left + right) / 2)
}

function swap(list, i, j) {
    let temp = list[i]
    list[i] = list[j]
    list[j] = temp
}