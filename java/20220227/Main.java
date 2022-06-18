/*
Let's represent an integer in a linked list format by having each node represent a digit in the number. 
The nodes make up the number in reversed order.

For example, the following linked list:

1 -> 2 -> 3 -> 4 -> 5
is the number 54321.

Given two linked lists in this format, return their sum in the same linked list format.

For example, given

9 -> 9
5 -> 2
return 124 (99 + 25) as:

4 -> 2 -> 1
*/

import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		SLList num1 = new SLList();
		SLList num2 = new SLList();
		Arrays.stream(args)
			.takeWhile(s -> s.matches("\\d"))
			.mapToInt(Integer::parseInt)
			.forEach(n -> num1.append(n));
		Arrays.stream(args)
			.dropWhile(s -> s.matches("\\d"))
			.filter(s -> s.matches("\\d"))
			.mapToInt(Integer::parseInt)
			.forEach(n -> num2.append(n));
		// String operator = Arrays.stream(args).filter(s -> s.matches("[+-]")).toArray(String[]::new)[0];
		// System.out.println(num1.asInt() + " " + operator + " " + num2.asInt());
		SLList num3 = num1.add(num2);
		System.out.println(num1 + " + " + num2 + " = " + num3);
	}
}

class SLList {
	Node root;
	int len = 0;

	void append(int value) {
		if (root == null) {
			root = new Node(value);
			return;
		}
		Node current = root;
		while (current.next != null) {
			current = current.next;
		}
		current.next = new Node(value);
		len++;
	}

	SLList add(SLList other) {
		return fromInt(this.asInt() + other.asInt());
	}

	int asInt() {
		Node current = root;
		int exp = 0;

		int total = 0;
		while (current != null) {
			total += current.value * Math.pow(10, exp++);
			current = current.next;
		}
		return total;
	}

	static SLList fromInt(int num) {
		SLList result = new SLList();
		int log10 = (int) Math.log10(num);
		for (int exp = 0; exp <= log10; exp++) {
			result.append(num % 10);
			num /= 10;
		}
		return result;
	}

	public String toString() {
		String result = "";
		Node current = root;
		while (current != null) {
			result += "(" + current.value + ")>";
			current = current.next;
		}
		return result;
	}
}

class Node {
	Node next;
	int value;

	Node(int value) { this.value = value; }
}
