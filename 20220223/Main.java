/*
In Ancient Greece, it was common to write text with the first line going left to right, the second line going right to left, 
and continuing to go back and forth. This style was called "boustrophedon".

Given a binary tree, write an algorithm to print the nodes in boustrophedon order.

For example, given the following tree:

       1
    /     \
  2         3
 / \       / \
4   5     6   7

You should return [1, 3, 2, 4, 5, 6, 7].
*/

import java.util.ArrayDeque;

class Main {
	public static void main(String[] args) {
		Tree tree = new Tree(1);
		tree.root.left = new Node(2);
		tree.root.right = new Node(3);
		tree.root.left.left = new Node(4);
		tree.root.left.right = new Node(5);
		tree.root.right.left = new Node(6);
		tree.root.right.right = new Node(7);

		tree.boustrophedonPrint();
	}
}

class Node {
	Node left, right;
	int data;
	Node(int data) { this.data = data; }
}

class Tree {
	Node root;

	Node[] currentLayer, nextLayer;
	boolean leftToRight = true;
	ArrayDeque<Node> printQueue;

	Tree(int data) {
		this.root = new Node(data);
	}

	void boustrophedonPrint() {
		// don't care to write a method to calculate this at runtime, so i'm hardcoding it
		int treeSize = 7;
		int maxDepth = (int) Math.round(Math.log(treeSize) / Math.log(2)) - 1;
		System.out.print(root.data + " ");
		boolean leftToRight = true;
		for (int i = 0; i < maxDepth; i++) {
			leftToRight = !leftToRight;
			boustrophedonPrintRecursive(root, leftToRight, i);
		}
	}

	private void boustrophedonPrintRecursive(Node node, boolean leftToRight, int depth) {
		if (depth == 0) {
			if (leftToRight) {
				if (node.left != null) System.out.print(node.left.data + " ");
				if (node.right != null) System.out.print(node.right.data + " ");
			} else {
				if (node.right != null) System.out.print(node.right.data + " ");
				if (node.left != null) System.out.print(node.left.data + " ");
			}
		} else {
			if (leftToRight) {
				if (node.left != null) boustrophedonPrintRecursive(node.left, leftToRight, depth - 1);
				if (node.right != null) boustrophedonPrintRecursive(node.right, leftToRight, depth - 1);
			} else {
				if (node.right != null) boustrophedonPrintRecursive(node.right, leftToRight, depth - 1);
				if (node.left != null) boustrophedonPrintRecursive(node.left, leftToRight, depth - 1);
			}			
		}
	}
}
