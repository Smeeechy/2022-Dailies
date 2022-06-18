/*
Write a program to merge two binary trees. Each node in the new tree should hold a value equal to the sum of the values of 
the corresponding nodes of the input trees.

If only one input tree has a node in a given position, the corresponding node in the new tree should match that input node.

5 2 1 8 6 10
     5
    / \
   2   8
  /   / \
 1   6   10

     +

4 2 1 3 5 6
     4
    / \
   2   5
  / \   \
 1   3   6

     =

     9
    / \
   4  13
  / | | \
 2  3 6 16 

*/

import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		Tree tree1 = new Tree();
		Tree tree2 = new Tree();
		Arrays.stream(args)
			.takeWhile(s -> s.matches("\\d+"))
			.mapToInt(Integer::parseInt)
			.forEach(n -> tree1.add(n));
		Arrays.stream(args)
			.dropWhile(s -> s.matches("\\d+"))
			.filter(s -> s.matches("\\d+"))
			.mapToInt(Integer::parseInt)
			.forEach(n -> tree2.add(n));

		Tree result = new Tree();
		result.root = addRecursive(tree1.root, tree2.root);
		System.out.println(result.root);		
	}

	private static Node addRecursive(Node first, Node second) {
		if (first == null && second == null) return null;
		int firstVal, secondVal;
		if (first == null) firstVal = 0;
		else firstVal = first.value;
		if (second == null) secondVal = 0;
		else secondVal = second.value;
		Node result = new Node(firstVal + secondVal);
		// i KNOW there is a better way to do this but i can't think of it right now
		if ((first != null && first.left != null) || (second != null && second.left != null)) {
			if (first != null) {
				if (second != null) result.left = addRecursive(first.left, second.left);
				else result.left = addRecursive(first.left, null);
			} else {
				if (second != null) result.left = addRecursive(null, second.left);
				else result.left = null;
			}
		}
		if ((first != null && first.right != null) || (second != null && second.right != null)) {
			if (first != null) {
				if (second != null) result.right = addRecursive(first.right, second.right);
				else result.right = addRecursive(first.right, null);
			} else {
				if (second != null) result.right = addRecursive(null, second.right);
				else result.right = null;
			}
		}
		return result;
	}
}

class Node {
	int value;
	Node left, right;

	Node() {}
	Node(int value) { this.value = value; }

	@Override
	public String toString() {
		return "(" + value + "){" + left + "}, [" + right + "]";
	}
}


class Tree {
	Node root;

	void add(int value) {
		if (root == null) root = new Node(value);
		else {
			Node current = root;
			while (true) {
				if (value < current.value) {
					// add it as left child if it's null, then break
					if (current.left == null) {
						current.left = new Node(value);
						break;
					// or update current to current.left
					} else {
						current = current.left;
					}
				} else {
					// add it as right child if it's null, then break
					if (current.right == null) {
						current.right = new Node(value);
						break;
					// or update current to current.right
					} else {
						current = current.right;
					}
				}
			}
		}
	}
}
