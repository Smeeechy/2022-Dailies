/*
Determine if an array is monotonic. An array is monotonic if its elements are all non-increasing or non-decreasing.
*/

const args = process.argv.slice(2)
const nums = args.map(Number)
console.log(nums)
console.log(isMonotonic(nums))

function isMonotonic(array) {
	if (array.length == 0 || array.length == 1) return true
	let index = 0
	let [current, next] = array
	while (current == next && index + 1 < array.length) {
		current = array[++index]
		next = array[index + 1]
	}
	if (current < next) {
		// non-decreasing
		for (let i = index; i < array.length; i++) {
			if (array[i + 1] < array[i]) return false
		}
		return true
	} else if (current > next) {
		// non-increasing
		for (let i = index; i < array.length; i++) {
			if (array[i + 1] > array[i]) return false
		}
		return true
	} else return true
}