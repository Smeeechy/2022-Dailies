/*
Create a MinMaxStack class that can perform the following operations in O(1) space and time:
- peek()
- push(value)
- pop()
- getMin()
- getMax()
*/

class MinMaxStack {
  constructor() {
    this.stack = []
  }

  #last() {
    return this.stack[this.stack.length - 1]
  }

  peek() {
    return this.#last().value
  }

  pop() {
    return this.stack.pop().value
  }

  push(number) {
    if (this.stack.length === 0) {
      this.stack.push({
        min: number,
        max: number,
        value: number
      })
    } else {
      this.stack.push({
        min: Math.min(this.#last().min, number),
        max: Math.max(this.#last().max, number),
        value: number
      })
    }
  }

  getMin() {
    return this.#last().min
  }

  getMax() {
    return this.#last().max
  }
}

const args = process.argv.slice(2)
const ops = JSON.parse(args[0])
const stack = new MinMaxStack()
for (const op of ops) {
  switch (op.action) {
    case 'peek':
      console.log('peek:', stack.peek())
      break
    case 'push':
      stack.push(op.value)
      console.log(`push ${op.value}`)
      break
    case 'pop':
      console.log('pop:', stack.pop())
      break
    case 'getMin':
      console.log('min:', stack.getMin())
      break
    case 'getMax':
      console.log('max:', stack.getMax())
      break
    default:
      break
  }
}
