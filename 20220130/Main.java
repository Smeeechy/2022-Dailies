/*
Suppose you are given a table of currency exchange rates, represented as a 2D array. Determine whether there is a possible arbitrage: 
that is, whether there is some sequence of trades you can make, starting with some amount A of any currency, so that you can end up with 
some amount greater than A of that currency.

There are no transaction costs and you can trade fractional quantities.
*/

import java.util.Arrays;
import java.util.ArrayList;

class Main {
	static ArrayList<Vertex> graph;

	static {
		graph = new ArrayList<>();
		Vertex zero = new Vertex(0);
		Vertex one = new Vertex(1);
		Vertex two = new Vertex(2);
		Vertex three = new Vertex(3);
		Vertex four = new Vertex(4);
		Vertex five = new Vertex(5);
		zero.addEdge(new Edge(one, 10));
		zero.addEdge(new Edge(five, 8));
		one.addEdge(new Edge(three, 2));
		two.addEdge(new Edge(one, 1));
		three.addEdge(new Edge(two, -2));
		four.addEdge(new Edge(one, -4));
		four.addEdge(new Edge(three, -1));
		five.addEdge(new Edge(four, 1));
		graph.add(zero);
		graph.add(one);
		graph.add(two);
		graph.add(three);
		graph.add(four);
		graph.add(five);

		for (Vertex v : graph) {
			for (Edge e : v.edges) {
				System.out.println(v.id + " -> " + e.target.id + ": " + e.cost);
			}
			System.out.println("-----");
		}
	}

	public static void main(String[] args) {
		int[] costs = new int[graph.size()];
		for (int i = 0; i < costs.length; i++) {
			costs[i] = Integer.MAX_VALUE;
		}
		costs[0] = 0;

		System.out.println("start: " + Arrays.toString(costs));
		for (int i = 0; i < costs.length; i++) {
			if (!relaxEdges(costs)) break;
			System.out.println("iteration " + i + ": " + Arrays.toString(costs));
		}
	}

	public static boolean relaxEdges(int[] costs) {
		boolean improved = false;
		for (Vertex v : graph) {
			if (costs[v.id] == Integer.MAX_VALUE) continue;
			for (Edge e : v.edges) {
				if (costs[e.target.id] > costs[v.id] + e.cost) {
					costs[e.target.id] = costs[v.id] + e.cost;
					improved = true;
				}
			}
		}
		return improved;
	}
}

class Vertex {
	int id;
	ArrayList<Edge> edges = new ArrayList<>();

	Vertex(int id) {
		this.id = id;
	}

	void addEdge(Edge edge) {
		this.edges.add(edge);
	}
}

class Edge {
	Vertex target;
	int cost;

	Edge(Vertex target, int cost) {
		this.target = target;
		this.cost = cost;
	}
}
