/*
Implement the following methods on the array prototype:
- map(callback)
- filter(callback)
- reduce(callback, startingValue)
You are not allowed to use the default implementations at any point.
Do not mutate the array these methods were called on.
*/

export {} // i do not know why this line is necessary but it is, got it from stackoverflow
declare global {
  interface Array<T> {
    myMap(callback: (t: T, index: number, context: T[]) => any): any[]
    myFilter(callback: (t: T, index: number, context: T[]) => boolean): T[]
    myReduce(callback: (accumulator: T, next: T, index: number, context: T[]) => T, initialValue: T): T
  }
}

Array.prototype.myMap = function (callback): number[] {
  const result: number[] = []
  for (let i = 0; i < this.length; i++) result[i] = callback(this[i], i, this)
  return result
}

Array.prototype.myFilter = function (callback): number[] {
  const result: number[] = []
  for (let i = 0; i < this.length; i++) if (callback(this[i], i, this) === true) result.push(this[i])
  return result
}

Array.prototype.myReduce = function (callback, initialValue) {
  let result = initialValue ?? this[0]
  for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) result = callback(result, this[i], i, this)
  return result
}

const nums = process.argv.slice(2).myMap(Number)
const squared = nums.myMap(n => n * n)
const noEvens = nums.myFilter(n => n % 2 !== 0)
const sum = nums.myReduce((acc, next) => acc + next, 0)
console.log(`squared: ${squared}`)
console.log(`odds:    ${noEvens}`)
console.log(`sum:     ${sum}`)
