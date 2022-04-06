/*
A graph is minimally-connected if it is connected and there is no edge that can be removed while still leaving the graph 
connected. For example, any binary tree is minimally-connected.

Given an undirected graph, check if the graph is minimally-connected. You can choose to represent the graph as either an 
adjacency matrix or adjacency list.
*/

import java.util.ArrayList;
import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		// i don't have a clean and quick way to generate a graph from command line input so i'm hardcoding this one
		Node one = new Node(1);
		Node two = new Node(2);
		Node three = new Node(3);
		Node four = new Node(4);
		Node five = new Node(5);
		Node six = new Node(6);

		one.add(two);
		one.add(three);
		three.add(four);
		three.add(five);
		two.add(six);
		
		System.out.println(isMinimallyConnected(one));
	}

	// a graph is minimally connected if its edge count (E) is one less than its vertex count (V), or
	// E = V - 1
	public static boolean isMinimallyConnected(Node start) {
		return countVertices(null, start) - countEdges(null, start) == 1;
	}

	// this kinda only works if there are no cycles in the graph
	// could remedy this by passing through a set of visited nodes to avoid infinite recursion
	// but i mean that's kinda just solving the problem again isn't it
	public static int countVertices(Node parent, Node start) {
		int count = 1;
		for (Node neighbor : start.getConnections()) {
			if (neighbor == parent) continue;
			else count += countVertices(start, neighbor);
		}
		return count;
	}

	// same as countVertices method, only works if not cyclic
	public static int countEdges(Node parent, Node start) {
		int count = start.getConnections().size();
		for (Node neighbor : start.getConnections()) {
			if (neighbor == parent) continue;
			else count += countEdges(start, neighbor) - 1;
		}
		return count;
	}
}

class Node {
	public final int value;
	private ArrayList<Node> connections;

	public Node(int value) {
		this.value = value;
		this.connections = new ArrayList<>();
	}

	public void add(Node neighbor) {
		this.connections.add(neighbor);
		neighbor.connections.add(this);
	}

	public ArrayList<Node> getConnections() {
		return this.connections;
	}
}
