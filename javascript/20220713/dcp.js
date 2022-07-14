/*
Given an array of intervals, merge all overlapping intervals and return the result.
*/

const mergeOverlappingIntervals = array => {
  array = array.sort((a, b) => a[0] - b[0])
  while (true) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
      if (i !== array.length - 1 && array[i][1] >= array[i + 1][0]) {
        newArray.push([array[i][0], Math.max(array[i][1], array[i + 1][1])])
        i++
      } else newArray.push(array[i])
    }
    if (array.length === newArray.length) return newArray
    else array = newArray
  }
}

const args = process.argv.slice(2)
const intervals = JSON.parse(args[0])
const result = mergeOverlappingIntervals(intervals)
console.log(result)
