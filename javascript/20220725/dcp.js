/*
Write a BST class for a binary search tree.
It should support the following methods:
- insert(value)
- contains(value)
- remove(value)
*/

class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value) {
    if (value >= this.value) {
      if (this.right) this.right.insert(value)
      else this.right = new BST(value)
    } else {
      if (this.left) this.left.insert(value)
      else this.left = new BST(value)
    }
    return this
  }

  contains(value) {
    if (this.value === value) return true
    if (this.value < value) {
      if (this.right) return this.right.contains(value)
      else return false
    } else {
      if (this.left) return this.left.contains(value)
      else return false
    }
  }

  remove(value, parent = null) {
    if (this.value === value) {
      if (!this.left && !this.right) {
        if (parent) {
          if (parent.left === this) {
            parent.left = null
          } else {
            parent.right = null
          }
        }
      } else if ((this.left && !this.right) || (!this.left && this.right)) {
        if (this.left) {
          this.value = this.left.value
          this.left.remove(this.value, this)
        } else {
          this.value = this.right.value
          this.right.remove(this.value, this)
        }
      } else {
        let next = this.right
        while (next.left) next = next.left
        this.value = next.value
        this.right.remove(this.value, this)
      }
    } else if (this.value < value) {
      if (this.right) this.right.remove(value, this)
    } else {
      if (this.left) this.left.remove(value, this)
    }
    return this
  }
}

const args = process.argv.slice(2)
const root = new BST(parseInt(args[0]))
const ops = JSON.parse(args[1])
for (let op of ops) {
  switch (op.method) {
    case 'insert':
      root.insert(op.value)
      console.log(root)
      break
    case 'remove':
      root.remove(op.value)
      console.log(root)
      break
    case 'contains':
      console.log(`contains ${op.value}:`, root.contains(op.value))
      break
    default:
      break
  }
}
