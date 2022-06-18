/*
You are given a huge list of airline ticket prices between different cities around the world on a given day. These are all direct flights. 
Each element in the list has the format (source_city, destination, price).

Consider a user who is willing to take up to k connections from their origin city A to their destination B. Find the cheapest fare possible 
for this journey and print the itinerary for that journey.

For example, our traveler wants to go from JFK to LAX with up to 3 connections, and our input flights are as follows:

[
    ('JFK', 'ATL', 150),
    ('ATL', 'SFO', 400),
    ('ORD', 'LAX', 200),
    ('LAX', 'DFW', 80),
    ('JFK', 'HKG', 800),
    ('ATL', 'ORD', 90),
    ('JFK', 'LAX', 500),
]
Due to some improbably low flight prices, the cheapest itinerary would be JFK -> ATL -> ORD -> LAX, costing $440.
*/

import java.util.Arrays;
import java.util.ArrayList;

class Main {
	private static ArrayList<ArrayList<Flight>> pathsToDest;

	public static void main(String[] args) {
		Flight[] flights = new Flight[] {
			new Flight("JFK", "ATL", 150),
			new Flight("ATL", "SFO", 400),
			new Flight("ORD", "LAX", 200),
			new Flight("LAX", "DFW", 80),
			new Flight("JFK", "HKG", 800),
			new Flight("ATL", "ORD", 90),
			new Flight("JFK", "LAX", 500)
		};

		String src = args[0].toUpperCase();
		String dest = args[1].toUpperCase();
		int limit = Integer.parseInt(args[2]);

		ArrayList<Flight> cheapestPath = cheapestPath(flights, src, dest, limit);

		if (cheapestPath == null) {
			System.out.println("No valid paths found");
		} else {
			for (Flight flight : cheapestPath) System.out.println(flight);
		}
	}

	public static ArrayList<Flight> cheapestPath(Flight[] allFlights, String src, String dest, int connectionLimit) {
		pathsToDest = new ArrayList<>();
		for (Flight flight : allFlights) {
			if (flight.src.equals(src)) {
				ArrayList<Flight> path = new ArrayList<>();
				path.add(flight);
				cheapestPathRecursive(allFlights, path, dest, connectionLimit - 1);
			}
		}

		ArrayList<Flight> cheapestPath = null;
		int minCost = Integer.MAX_VALUE;
		for (ArrayList<Flight> path : pathsToDest) {
			int cost = 0;
			for (Flight flight : path) {
				cost += flight.cost;
			}
			if (cost < minCost || cheapestPath == null) {
				cheapestPath = path;
				minCost = cost;
			}
		}

		return cheapestPath;
	}

	public static void cheapestPathRecursive(Flight[] allFlights, ArrayList<Flight> history, String dest, int connectionLimit) {
		if (connectionLimit == 0) return;
		for (Flight flight : allFlights) {
			if (flight.src.equals(history.get(history.size() - 1).dest)) {
				ArrayList<Flight> newHistory = new ArrayList<>(history);
				newHistory.add(flight);
				if (flight.dest.equals(dest)) {
					pathsToDest.add(newHistory);
				} else cheapestPathRecursive(allFlights, newHistory, dest, connectionLimit - 1);
			}
		}
	}
}

class Flight {
	String src, dest;
	int cost;

	Flight(String src, String dest, int cost) {
		this.src = src;
		this.dest = dest;
		this.cost = cost;
	}

	public String toString() {
		return this.src + " -> " + this.dest + ": $" + this.cost;
	}
}
