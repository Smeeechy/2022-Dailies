/*
Write a DoublyLinkedLIst class that has a head and tail, both of which point to either
a linked list Node or null.

Note that the setHead, setTail, insertBefore, insertAfter, insertAtPosition, and remove
methods all take in actual Nodes as input parameters, not integers (except for
insertAtPosition, which also takes in an integer representing the position); this means
that you don't need to create any new Nodes in these methods. The input nodes can be
either stand-alone nodes or nodes that are already in the linked list. If they're nodes
that are already in the linked list, the methods will effectively be moving the nodes
within the linked list. You won't be told if the input nodes are already in the linked
list, so your code will have to defensively handle this scenario.
*/

// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  setHead(node) {
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      if (this.containsNode(node)) this.remove(node)
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
  }

  setTail(node) {
    if (!this.tail) {
      this.head = node
      this.tail = node
    } else {
      if (this.containsNode(node)) this.remove(node)
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
  }

  insertBefore(node, nodeToInsert) {
    if (this.containsNode(nodeToInsert)) this.remove(nodeToInsert)
    if (node === this.head) this.setHead(nodeToInsert)
    else {
      const oldPrev = node.prev
      node.prev = nodeToInsert
      nodeToInsert.prev = oldPrev
      if (oldPrev) oldPrev.next = nodeToInsert
      nodeToInsert.next = node
    }
  }

  insertAfter(node, nodeToInsert) {
    if (this.containsNode(nodeToInsert)) this.remove(nodeToInsert)
    if (node === this.tail) this.setTail(nodeToInsert)
    else {
      const oldNext = node.next
      node.next = nodeToInsert
      nodeToInsert.next = oldNext
      if (oldNext) oldNext.prev = nodeToInsert
      nodeToInsert.prev = node
    }
  }

  insertAtPosition(position, nodeToInsert) {
    if (this.containsNode(nodeToInsert)) this.remove(nodeToInsert)
    let current = this.head
    for (let index = 1; index < position; index++) current = current.next
    if (current === this.head) this.setHead(nodeToInsert)
    else this.insertBefore(current, nodeToInsert)
  }

  removeNodesWithValue(value) {
    let current = this.head
    while (current) {
      const next = current.next
      if (current.value === value) this.remove(current)
      current = next
    }
  }

  remove(node) {
    const nodePrev = node.prev
    const nodeNext = node.next
    if (node === this.head) this.head = nodeNext
    if (node === this.tail) this.tail = nodePrev
    if (nodePrev) nodePrev.next = nodeNext
    if (nodeNext) nodeNext.prev = nodePrev
    node.prev = null
    node.next = null
  }

  containsNodeWithValue(value) {
    let current = this.head
    while (current) {
      if (current.value === value) return true
      current = current.next
    }
    return false
  }

  containsNode(node) {
    let current = this.head
    while (current) {
      if (current === node) return true
      current = current.next
    }
    return false
  }

  toString() {
    let str = '' + this.head.value
    let current = this.head.next
    while (current) {
      str += ' <-> ' + current.value
      current = current.next
    }
    return str
  }
}
