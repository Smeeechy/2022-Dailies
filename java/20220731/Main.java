/*
Given a linked list and an integer k, shift the list in-place by k and return its head.
K can be negative or greater than the length of the list.
There will always be at least one node.
*/

import java.util.Arrays;

class Main {
  public static void main(String[] args) {
    // parsing inputs
    int k = Integer.parseInt(args[0]);
    Program.LinkedList head = new Program.LinkedList(Integer.parseInt(args[1]));
    Program.LinkedList current = head;
    for (int i = 2; i < args.length; i++) {
      current.next = new Program.LinkedList(Integer.parseInt(args[i]));
      current = current.next;
    }

    // running algorithm and printing resulting list
    Program.LinkedList shifted = Program.shiftLinkedList(head, k);
    current = shifted;
    while (current != null) {
      System.out.print(current.value + " -> ");
      current = current.next;
    }
  }
}

class Program {
  public static LinkedList shiftLinkedList(LinkedList head, int k) {
    // finding the list length
    LinkedList current = head;
    int length = 1;
    while (current.next != null) {
      current = current.next;
      length++;
    }

    // convert k to equivalent positive value
    if (k < 0)
      k = length + (k % length);
    if (k >= length)
      k %= length;

    // create pair of nodes with k - 1 nodes between them
    current = head;
    for (int i = 0; i < k; i++)
      current = current.next;
    LinkedList kthLast = head;

    // iterate pair through list to end
    while (current.next != null) {
      current = current.next;
      kthLast = kthLast.next;
    }

    // set new head and tail and return new head
    current.next = head;
    LinkedList newHead = kthLast.next;
    kthLast.next = null;
    return newHead;
  }

  static class LinkedList {
    public int value;
    public LinkedList next;

    public LinkedList(int value) {
      this.value = value;
      next = null;
    }
  }
}
