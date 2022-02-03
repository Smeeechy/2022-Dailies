/*
Implement a stack that has the following methods:

push(val), which pushes an element onto the stack
pop(), which pops off and returns the topmost element of the stack. If there are no elements in the stack, then it should throw an error/return null.
max(), which returns the maximum value in the stack currently. If there are no elements in the stack, then it should throw an error or return null.
Each method should run in constant time.
*/

class Main {
	public static void main(String[] args) {
		Stack<Integer> stack = new Stack<>();
		stack.push(1);
		System.out.println(stack);
		stack.push(3);
		System.out.println(stack);
		stack.push(5);
		System.out.println(stack);
		stack.push(4);
		System.out.println(stack);
		stack.push(2);
		System.out.println(stack);
		stack.pop();
		System.out.println(stack);
		System.out.println(stack.max());
	}
}

class Stack<T extends Comparable<T>> {
	private StackNode top;

	private class StackNode {
		T data;
		StackNode next;

		StackNode(T t) {
			this.data = t;
		}

		boolean hasNext() {
			return this.next != null;
		}
	}

	public void push(T t) {
		StackNode temp = this.top;
		this.top = new StackNode(t);
		this.top.next = temp;
	}

	public T pop() {
		try {
			StackNode popped = this.top;
			this.top = popped.next;
			return popped.data;
		} catch (Exception e) {
			return null;
		}
	}

	public T max() {
		try {
			StackNode current = this.top;
			T max = current.data;
			while (current != null) {
				if (current.data.compareTo(max) > 0) max = current.data;
				current = current.next;
			}
			return max;
		} catch (Exception e) {
			return null;
		}
	}

	public String toString() {
		String str = "-----\n";
		StackNode current = this.top;
		while (current != null) {
			str += current.data.toString() + " ";
			current = current.next;
		}
		return str + "\n-----";
	}
}
