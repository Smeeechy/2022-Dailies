/*
Suppose you are given a table of currency exchange rates, represented as a 2D array. Determine whether there is a possible arbitrage: 
that is, whether there is some sequence of trades you can make, starting with some amount A of any currency, so that you can end up with 
some amount greater than A of that currency.

There are no transaction costs and you can trade fractional quantities.
*/

import java.util.Arrays;
import java.util.ArrayList;

class Main {
	static int[] costs;
	static ArrayList<Vertex> graph;

	static {
		graph = new ArrayList<>();
		Vertex v0 = new Vertex(0);
		Vertex v1 = new Vertex(1);
		Vertex v2 = new Vertex(2);
		Vertex v3 = new Vertex(3);
		Vertex v4 = new Vertex(4);
		Vertex v5 = new Vertex(5);
		Vertex v6 = new Vertex(6);
		Vertex v7 = new Vertex(7);
		Vertex v8 = new Vertex(8);
		Vertex v9 = new Vertex(9);

		v0.addCostToVertex(5, v1);
		v1.addCostToVertex(20, v2);
		v1.addCostToVertex(30, v5);
		v1.addCostToVertex(60, v6);
		v2.addCostToVertex(10, v3);
		v2.addCostToVertex(75, v4);
		v3.addCostToVertex(-15, v2);
		v4.addCostToVertex(100, v9);
		v5.addCostToVertex(25, v4);
		v5.addCostToVertex(5, v6);
		v5.addCostToVertex(50, v8);
		v6.addCostToVertex(-50, v7);
		v7.addCostToVertex(-10, v8);

		graph.add(v0);
		graph.add(v1);
		graph.add(v2);
		graph.add(v3);
		graph.add(v4);
		graph.add(v5);
		graph.add(v6);
		graph.add(v7);
		graph.add(v8);
		graph.add(v9);

		for (Vertex v : graph) {
			for (Edge e : v.edges) {
				System.out.println(v.id + " -> " + e.target.id + ": " + e.cost);
			}
		}
	}

	public static void main(String[] args) {
		costs = new int[graph.size()];
		for (int i = 0; i < costs.length; i++) {
			costs[i] = Integer.MAX_VALUE;
		}
		costs[0] = 0;

		for (int i = 0; i < costs.length - 1; i++) {
			if (!relaxEdges(costs)) break;
		}

		for (int i = 0; i < costs.length - 1; i++) {
			findLoops(costs);
		}

		print();
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

	public static void findLoops(int[] costs) {
		for (Vertex v : graph) {
			for (Edge e : v.edges) {
				if (costs[v.id] == Integer.MIN_VALUE) costs[e.target.id] = Integer.MIN_VALUE;
				if (costs[e.target.id] > costs[v.id] + e.cost) costs[v.id] = Integer.MIN_VALUE;
			}
		}
	}

	public static void print() {
		System.out.print("[");
		for (int i = 0; i < costs.length; i++) {
			int cost = costs[i];
			String cost_str = "";
			if (cost == Integer.MAX_VALUE) cost_str += "\u221E";
			else if (cost == Integer.MIN_VALUE) cost_str += "-\u221E";
			else cost_str += cost;
			if (i < costs.length - 1) cost_str += ", ";
			System.out.print(cost_str);
		}
		System.out.println("]");
	}
}

class Vertex {
	int id;
	ArrayList<Edge> edges = new ArrayList<>();

	Vertex(int id) {
		this.id = id;
	}

	void addCostToVertex(int cost, Vertex target) {
		this.edges.add(new Edge(target, cost));
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
