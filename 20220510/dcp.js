/*
Implement a 2D iterator class. It will be initialized with an array of arrays, and should implement the following methods:

next(): returns the next element in the array of arrays. If there are no more elements, raise an exception.
has_next(): returns whether or not the iterator still has elements left.
For example, given the input [[1, 2], [3], [], [4, 5, 6]], calling next() repeatedly should output 1, 2, 3, 4, 5, 6.

Do not use flatten or otherwise clone the arrays. Some of the arrays can be empty.
*/

class Iterator2d {
    constructor(arr2d) {
        this.index = 0
        this.arr2d = arr2d
    }

    #convertIndex(indexToConvert) {
        let counter = 0
        for (const i in this.arr2d) {
            for (const j in this.arr2d[i]) {
                if (counter++ == indexToConvert) return [i, j]
            }
        }
        return null
    }

    next() {
        const [i, j] = this.#convertIndex(this.index++)
        return this.arr2d[i][j]
    }

    hasNext() {
        return this.#convertIndex(this.index) != null
    }
}

const args = process.argv.slice(2)
const arr2d = JSON.parse(args[0])
const iterator = new Iterator2d(arr2d)
while (iterator.hasNext()) console.log(iterator.next())