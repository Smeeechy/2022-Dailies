/*
Given k sorted singly linked lists, write a function to merge all the lists into one sorted singly linked list.
*/

import java.util.Arrays;
import java.util.Random;

class Main {
	private static final Random random = new Random();

	public static void main(String[] args) {
		int k = Integer.parseInt(args[0]);
		SLList[] lists = new SLList[k];
		for (int i = 0; i < k; i++) {
			lists[i] = new SLList();
			for (int j = 0; j < random.nextInt(8) + 2; j++) {
				lists[i].add(random.nextInt(100));
			}
			lists[i].sort();
		}

		Arrays.stream(lists).forEach(System.out::println);
		System.out.println();

		SLList result = merge(lists);

		System.out.println(result);
	}

	public static SLList merge(SLList[] lists) {
		SLList result = new SLList();
		for (SLList list : lists) {
			result.add(list);
			result.sort();
		}
		return result;
	}
}

class SLList {
	Node root;
	private int len = 0;

	class Node {
		int data;
		Node next;
		Node(int data) {this.data = data;}
		public String toString() {
			return "(" + this.data + ")>";
		}
	}

	void add(int data) {
		if (this.root == null) this.root = new Node(data);
		else {
			Node current = this.root;
			while (current.next != null) {
				current = current.next;
			}
			current.next = new Node(data);
		}
		this.len++;
	}

	void add(SLList list) {
		Node current = list.root;
		while (current != null) {
			add(current.data);
			current = current.next;
		}
	}

	void sort() {
		Node[] unsorted = new Node[this.len];
		Node current = this.root;
		int index = 0;
		while (current != null) {
			unsorted[index] = current;
			current = current.next;
			index++;
		}

		Node[] sorted = new Node[this.len];
		for (int i = 0; i < sorted.length; i++) {
			int minIndex = 0;
			Node min = unsorted[0];
			for (int j = 0; j < unsorted.length; j++) {
				if (unsorted[j].data < min.data) {
					min = unsorted[j];
					minIndex = j;
				}
			}
			sorted[i] = min;
			unsorted = pop(unsorted, minIndex);
		}

		this.root = sorted[0];
		current = this.root;
		for (int i = 1; i < sorted.length; i++) {
			current.next = sorted[i];
			current = current.next;
		}
		current.next = null;
	}

	static Node[] pop(Node[] nodes, int index) {
		Node[] result = new Node[nodes.length - 1];
		for (int i = 0, j = 0; i < nodes.length; i++) {
			if (i != index) result[j++] = nodes[i];
		}
		return result;
	}

	public String toString() {
		String result = "";
		Node current = this.root;
		while (current != null) {
			result += current;
			current = current.next;
		}
		return result;
	}
}
