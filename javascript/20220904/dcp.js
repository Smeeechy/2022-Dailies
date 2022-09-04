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
    // Write your code here.
  }

  setTail(node) {
    // Write your code here.
  }

  insertBefore(node, nodeToInsert) {
    // Write your code here.
  }

  insertAfter(node, nodeToInsert) {
    // Write your code here.
  }

  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
  }

  removeNodesWithValue(value) {
    // Write your code here.
  }

  remove(node) {
    // Write your code here.
  }

  containsNodeWithValue(value) {
    // Write your code here.
  }
}

const args = process.argv.slice(2)
