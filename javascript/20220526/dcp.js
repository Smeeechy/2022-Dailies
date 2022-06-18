/*
Implement a queue using two stacks. It should have the methods 
enqueue(element) => void, and dequeue() => element
*/

class StackNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor(id) {
        this.id = id
        this.root = null
        this.tail = null
    }

    push(val) {
        if (!this.root) {
            this.root = new StackNode(val)
            this.tail = this.root
        } else {
            this.tail.next = new StackNode(val)
            this.tail = this.tail.next
        }
    }

    pop() {
        if (this.root == null) return null
        else {
            if (this.tail === this.root) {
                let result = this.tail.val
                this.root = null
                this.tail = null
                return result
            }
            let current = this.root
            while (current.next !== this.tail) current = current.next
            this.tail = current
            let result = current.next.val
            current.next = null
            return result
        }
    }

    print() {
        let current = this.root
        while (current != null) {
            console.log(current.val)
            current = current.next
        }
    }
}

class Queue {
    constructor() {
        this.enqueueStack = new Stack('enqueue')
        this.dequeueStack = new Stack('dequeue')
    }

    enqueue(val) {
        if (this.enqueueStack.root == null) {
            while (this.dequeueStack.root != null) this.enqueueStack.push(this.dequeueStack.pop())
        }
        this.enqueueStack.push(val)
    }

    dequeue() {
        if (this.dequeueStack.root == null) {
            if (this.enqueueStack.root == null) return null
            else while (this.enqueueStack.root != null) this.dequeueStack.push(this.enqueueStack.pop())
        }
        return this.dequeueStack.pop()
    }
}

const args = process.argv.slice(2)
const test = new Queue()
for (let i = 0; i < 10; i++) {
    const num = parseInt(Math.random() * 1000)
    test.enqueue(num)
}

console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.dequeue())
test.enqueue(10000)
console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.dequeue())
test.enqueue(20000)
console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.dequeue())