/*
Invert a binary tree.

For example, given the following tree:

    a
   / \
  b   c
 / \  /
d   e f
should become:

  a
 / \
 c  b
 \  / \
  f e  d
*/

class Main {
	public static void main(String[] args) {
		Node root = new Node(1);
		root.left = new Node(2);
		root.right = new Node(3);
		root.left.left = new Node(4);
		root.left.right = new Node(5);
		root.right.left = new Node(6);

		System.out.println(root);

		invert(root);

		System.out.println(root);
	}

	public static void invert(Node root) {
		if (root.left != null) invert(root.left);
		if (root.right != null) invert(root.right);
		Node temp = root.left;
		root.left = root.right;
		root.right = temp;
	}
}

class Node {
	final int value;
	Node left, right;

	public Node(int value) {
		this.value = value;
	}

	@Override
	public String toString() {
		String result = String.valueOf(value);
		if (left != null) result += " L(" + left + ")";
		if (right != null) result += " R(" + right + ")";
		return result;
	}
}
