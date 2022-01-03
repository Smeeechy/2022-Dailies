/*
Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.

The list is very long, so making more than one pass is prohibitively expensive.

Do this in constant space and in one pass.
*/

class Main {
  public static void main(String[] args) {
    SinglyLinkedList list = new SinglyLinkedList();
    int l = Integer.parseInt(args[0]) - 1;
    for (int i = 0; i < l; i++) {
      list.addNode();
    }
    System.out.println(list);
  }

  public static void removeKthLastElement(SinglyLinkedList list, int k) {

  }
}

class SinglyLinkedList {
  Node root;

  SinglyLinkedList() {
    this.root = new Node(1);
  }

  public void addNode() {
    Node current = this.root;
    while (current.hasNext()) {
      current = current.next;
    }
    current.next = new Node(current.id + 1);
  }

  public String toString() {
    return root.toString();
  }
}

class Node {
  int id;
  Node next;

  Node(int id) {
    this.id = id;
  }

  public boolean hasNext() {
    return this.next != null;
  }

  public String toString() {
    String result = this.id + " ";
    if (this.next != null) result += next.toString();
    return result;
  }
}
