/*
You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. Each False boolean represents a 
tile you can walk on.

Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start. 
If there is no possible path, then return null. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges 
of the board.

For example, given the following board:

[[f, f, f, f],
[t, t, f, t],
[f, f, f, f],
[f, f, f, f]]

and start = (3, 0) (bottom left) and end = (0, 0) (top left), the minimum number of steps required to reach the end is 7, since we would need to go 
through (1, 2) because there is a wall everywhere else on the second row.
*/

import java.util.ArrayList;

class Main {
	static Node[][] board = new Node[4][4];
	static Node start, end;

	static {
		// initializing empty board
		for (int x = 0; x < board[0].length; x++) {
			for (int y = 0; y < board.length; y++) {
				board[x][y] = new Node(x, y, false);
			}
		}

		// adding walls
		Node[] row2 = board[1];
		row2[0] = new Node(1, 0, true);
		row2[1] = new Node(1, 1, true);
		row2[3] = new Node(1, 3, true);

		// adding start and end nodes
		start = new Node(3, 0, false);
		end = new Node(0, 0, false);
		board[3][0] = start;
		board[0][0] = end;
	}

	public static void main(String[] args) {
		print();
		ArrayList<Node> path = new ArrayList<>();
		path.add(start);
		Node current = start;
		while (true) {
			ArrayList<Node> pool = current.getNeighbors();
			if (pool.isEmpty()) break;
			int fmin = Integer.MAX_VALUE;
			for (Node node : pool) {
				if (node.fcost < fmin) current = node;
			}
			path.add(current);
			if (current == end) break;
		}
		path.forEach(System.out::println);
	}

	static void print() {
		System.out.println();
		for (Node[] row : board) {
			System.out.print(" ");
			for (Node node : row) {
				if (node.isWall) System.out.print("X");
				else if (start == node) System.out.print("S");
				else if (end == node) System.out.print("E");
				else System.out.print("O");
			}
			System.out.println();
		}
		System.out.println();
	}

	static class Node {
		int coordX, coordY;
		int gcost, hcost, fcost;
		boolean isWall;
		boolean checked = false;
	
		Node(int coordX, int coordY, boolean isWall) {
			this.coordX = coordX;
			this.coordY = coordY;
			this.isWall = isWall;
		}
	
		void setFCost() {
			this.gcost = getGCost();
			this.hcost = getHCost();
			this.fcost = this.gcost + this.hcost;
			this.checked = false;
		}
	
		int getGCost() {
			return Math.abs(this.coordX - start.coordX) + Math.abs(this.coordY - start.coordY);
		}
	
		int getHCost() {
			return Math.abs(this.coordX - end.coordX) + Math.abs(this.coordY - end.coordY);
		}
	
		ArrayList<Node> getNeighbors() {
			ArrayList<Node> neighbors = new ArrayList<>();
			for (int x = this.coordX - 1; x < this.coordX + 2; x++) {
				for (int y = this.coordY - 1; y < this.coordY + 2; y++) {
					if (x >= 0 && y >= 0 && x < board[0].length && y < board.length && (x != this.coordX || y != this.coordY)) {
						if (!board[x][y].isWall && !board[x][y].checked) {
							neighbors.add(board[x][y]);
							board[x][y].setFCost();
							board[x][y].checked = true;
						}
					}
				}
			}
			return neighbors;
		}
	
		public String toString() {
			return (this.isWall ? "wall" : "open") + " (" + this.coordX + ", " + this.coordY + ")" 
				+ " [g=" + this.gcost + " h=" + this.hcost + " f=" + this.fcost + "]";
		}
	}
}
