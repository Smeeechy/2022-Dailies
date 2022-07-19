/*
Recursively sort an array of integers in place.
You may only access the top element, and only using the standard peek, pop, and push methods for stacks.
You may not use any auxiliary data structures.
*/

// push and pop are already defined for arrays in js, so i'm defining peek here for consistency
Array.prototype.peek = function () { return this[this.length - 1] }

const sortStack = stack => {
  if (stack.length !== 0) {
    const top = stack.pop()
    sortStack(stack)
    if (stack.length === 0 || top >= stack.peek()) stack.push(top)
    else insert(top, stack)
  }
  return stack
}

const insert = (value, stack) => {
  if (value < stack.peek()) {
    const top = stack.pop()
    insert(value, stack)
    stack.push(top)
  } else stack.push(value)
}

const args = process.argv.slice(2)
const stack = args.map(Number)
console.log(stack)
sortStack(stack)
console.log(stack)
