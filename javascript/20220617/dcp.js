/*
Create a continuous median handler class which supports continuous insertion and O(1) time median retrieval.
*/

// heaps provide optimal insertion time complexity O(log n) so i'm using them here
class ContinuousMedianHandler {
    constructor() {
        this.lowerHalf = []
        this.greaterHalf = []
        this.median = null
    }

    insert(number) {
        if (this.lowerHalf.length === 0 || number < this.lowerHalf[0]) {
            // insert it into the lower half max heap
            this.lowerHalf.push(number)
            this.#heapifyUp(this.lowerHalf, false)
        } else {
            // insert it into the greater half min heap
            this.greaterHalf.push(number)
            this.#heapifyUp(this.greaterHalf, true)
        }
        if (Math.abs(this.lowerHalf.length - this.greaterHalf.length) > 1) {
            // rebalance heaps by removing top element from larger heap and inserting it into the smaller heap
            let element
            if (this.lowerHalf.length > this.greaterHalf.length) {
                element = this.#poll(this.lowerHalf, false)
                this.greaterHalf.push(element)
                this.#heapifyUp(this.greaterHalf, true)
            } else {
                element = this.#poll(this.greaterHalf, true)
                this.lowerHalf.push(element)
                this.#heapifyUp(this.lowerHalf, false)
            }
        }

        // setting the median depending on the resulting lengths of the min and max heaps
        if (this.lowerHalf.length > this.greaterHalf.length) this.median = this.lowerHalf[0]
        else if (this.greaterHalf.length > this.lowerHalf.length) this.median = this.greaterHalf[0]
        else this.median = (this.lowerHalf[0] + this.greaterHalf[0]) / 2
    }

    // starting with the last element, swap it with its parent until it's in the right position
    #heapifyUp(heap, isMinHeap) {
        let currentIndex = heap.length - 1
        let parentIndex = this.#getParent(currentIndex)
        if (isMinHeap) {
            while (true) {
                if (heap[currentIndex] < heap[parentIndex]) {
                    this.#swap(heap, currentIndex, parentIndex)
                    currentIndex = parentIndex
                    parentIndex = this.#getParent(currentIndex)
                } else break
            }
        } else {
            while (true) {
                if (heap[currentIndex] > heap[parentIndex]) {
                    this.#swap(heap, currentIndex, parentIndex)
                    currentIndex = parentIndex
                    parentIndex = this.#getParent(currentIndex)
                } else break
            }
        }
    }

    // starting with the root element, swap it with its children until it's in the correct place
    #heapifyDown(heap, isMinHeap) {
        let currentIndex = 0
        let childIndices = this.#getChildren(currentIndex)
        if (isMinHeap) {
            let lesserChildIndex
            while (true) {
                if (childIndices[0] < heap.length) lesserChildIndex = childIndices[0]
                if (childIndices[1] < heap.length && heap[childIndices[1]] < heap[lesserChildIndex]) lesserChildIndex = childIndices[1]
                if (heap[lesserChildIndex] < heap[currentIndex]) {
                    this.#swap(heap, lesserChildIndex, currentIndex)
                    currentIndex = lesserChildIndex
                    childIndices = this.#getChildren(currentIndex)
                } else break
            }
        } else {
            let greaterChildIndex
            while (true) {
                if (childIndices[0] < heap.length) greaterChildIndex = childIndices[0]
                if (childIndices[1] < heap.length && heap[childIndices[1]] > heap[greaterChildIndex]) greaterChildIndex = childIndices[1]
                if (heap[greaterChildIndex] > heap[currentIndex]) {
                    this.#swap(heap, greaterChildIndex, currentIndex)
                    currentIndex = greaterChildIndex
                    childIndices = this.#getChildren(currentIndex)
                } else break
            }
        }
    }

    // remove top element and rebalance heap
    #poll(heap, isMinHeap) {
        let root = heap[0]
        heap[0] = heap[heap.length - 1]
        heap.length--
        this.#heapifyDown(heap, isMinHeap)
        return root
    }

    // swap two elements in a heap
    #swap(heap, i, j) {
        const temp = heap[i]
        heap[i] = heap[j]
        heap[j] = temp
    }

    // get index of parent in heap
    #getParent(index) {
        return parseInt((index - 1) / 2)
    }

    // get array of indices of children in heap
    #getChildren(index) {
        return [index * 2 + 1, index * 2 + 2]
    }

    // O(1) time retrieval
    getMedian() {
        return this.median
    }
}

const args = process.argv.slice(2)
const CMH = new ContinuousMedianHandler()
const inputs = args.map(Number)
const medians = []
inputs.forEach(input => {
    CMH.insert(input)
    medians.push(CMH.getMedian())
})

const result = inputs.map((_, index) => [inputs[index], medians[index]])
console.table(result)