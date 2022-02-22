/*
Typically, an implementation of in-order traversal of a binary tree has O(h) space complexity, where h is the height of 
the tree. Write a program to compute the in-order traversal of a binary tree using O(1) space.
*/

import java.util.ArrayList;
import java.util.function.Consumer;

class Main {
	public static void main(String[] args) {
	/*
	**	using this tree as an example:
	**
	**	     10
	**	    /  \
	**	   5   30
	**	  / \    \
	**	-2   6   40
	**	  \   \
	**	   1   8
	**	  /
	**	-1
	*/

		Tree tree = new Tree(10);
		tree.add(30);
		tree.add(40);
		tree.add(5);
		tree.add(-2);
		tree.add(2);
		tree.add(6);
		tree.add(8);
		tree.add(-1);

		morrisInOrder(tree);
	}

	static void morrisInOrder(Tree tree) {
		ArrayList<Tree.Node> result = new ArrayList<>();
		Tree.Node current = tree.root;
		while (current != null) {
			if (current.left == null) {
				System.out.println(current.data);
				current = current.right;
			} else {
				Tree.Node pre = current.left;
				while (pre.right != null && pre.right != current) pre = pre.right;
				if (pre.right == null) {
					pre.right = current;
					current = current.left;
				} else {
					pre.right = null;
					System.out.println(current.data);
					current = current.right;
				}
			}
		}
	}
}

// your standard-issue binary tree
class Tree {
	class Node {
		Node left, right;
		int data;
		Node(int data) { this.data = data; }
	}

	Node root;

	Tree(int data) { this.root = new Node(data); }

	void add(int data) {
		Node current = root;
		while (true) {
			if (current.data >= data) {
				if (current.left != null) current = current.left;
				else {
					current.left = new Node(data);
					return;
				}
			} else {
				if (current.right != null) current = current.right;
				else {
					current.right = new Node(data);
					return;
				}
			}
		}
	}
}
