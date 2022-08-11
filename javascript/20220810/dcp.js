/*
Build a MinHeap class that supports the following methods:
- buildHeap(array)
- siftDown()
- siftUp()
- peek()
- insert(value)
- remove() // removes root value
*/

class MinHeap {
  #heap

  constructor(array) {
    this.#heap = this.#buildHeap(array);
  }

  asArray() {
    return [...this.#heap]
  }

  #buildHeap(array) {
    this.#heap = []
    for (let value of array) this.insert(value)
    return this.#heap
  }

  #siftDown() {
    let i = 0
    let [l, r] = this.#children(i)
    while (l < this.#heap.length) {
      let minChild = Math.min(this.#heap[l], this.#heap[r])
      if (this.#heap[i] < minChild) return
      if (minChild === this.#heap[l]) {
        this.#swap(i, l)
        i = l
      } else {
        this.#swap(i, r)
        i = r
      }
      [l, r] = this.#children(i)
    }
  }

  #siftUp() {
    let i = this.#heap.length - 1
    let p = this.#parent(i)
    while (p >= 0 && this.#heap[i] < this.#heap[p]) {
      this.#swap(i, p)
      i = p
      p = this.#parent(i)
    }
  }

  peek() {
    return this.#heap[0]
  }

  remove() {
    const top = this.#heap[0]
    this.#heap[0] = this.#heap.pop()
    this.#siftDown()
    return top
  }

  insert(value) {
    this.#heap.push(value)
    this.#siftUp()
  }

  #parent(index) {
    return parseInt((index - 1) / 2)
  }

  #children(index) {
    return [index * 2 + 1, index * 2 + 2]
  }

  #swap(i, j) {
    const temp = this.#heap[i]
    this.#heap[i] = this.#heap[j]
    this.#heap[j] = temp
  }
}

const args = process.argv.slice(2)
const nums = args.map(Number)
const heap = new MinHeap(nums)
console.log(heap.asArray())