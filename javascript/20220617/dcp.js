/*
Create a continuous median handler class, which supports insertion and instantaneous retrieval.
*/

// optimally this would use two heaps, a min heap and max heap, and use both to determine the median on the fly
class ContinuousMedianHandler {
    constructor() {
        this.nums = []
        this.length = 0
        this.median = null
    }

    insert(number) {
        this.nums.push(number)
        this.nums.sort((a, b) => a - b)
        this.length++
        this.median = this.length % 2 === 0 ?
            (this.nums[this.length / 2 - 1] + this.nums[this.length / 2]) / 2 :
            this.nums[parseInt(this.length / 2)]
    }

    getMedian() {
        return this.median
    }
}

const args = process.argv.slice(2)
