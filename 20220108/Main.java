/*
Boggle is a game played on a 4 x 4 grid of letters. The goal is to find as many words as possible 
that can be formed by a sequence of adjacent letters in the grid, using each cell at most once. 
Given a game board and a dictionary of valid words, implement a Boggle solver.
*/

import java.util.ArrayList;
import java.util.Random;

public class Main {
	private static final String[] dict = new String[] { "ab", "ad", "ah", "al", "an", "am", "be", "bi", "by" };

	public static void main(String[] args) {
		Board board = new Board();
		board.display();
		for (String word : dict) {
			System.out.println(word + "\t\tis " + (board.check(word) ? "" : "not ") + "in this board");
			board.refreshCells();
		}
	}
}

class Board {
	Cell[][] cells = new Cell[4][4];
	Random random = new Random();

	public Board() {
		for (int x = 0; x < 4; x++) {
			for (int y = 0; y < 4; y++) {
				Cell cell = new Cell(x, y);
				cell.letter = (char) (random.nextInt(26) + 97);
				cells[x][y] = cell;
			}
		}
	}

	public boolean check(String word) {
		char[] letters = word.toCharArray();
		Cell current;
		ArrayList<Cell> pool = null;
		for (int x = 0; x < 4; x++) {
			for (int y = 0; y < 4; y++) {
				if (cells[x][y].letter == letters[0]) {
					current = cells[x][y];
					current.used = true;
					pool = getValidNeighbors(current);
					break;
				}	
			}
		}
		if (pool == null) return false;
		else {
			for (int index = 1; index < letters.length; index++) {
				for (Cell cell : pool) {
					if (cell.letter == letters[index]) {
						cell.used = true;
						pool = getValidNeighbors(cell);
						if (index == letters.length) return true;
						else continue;
					}
				}
			}
		}
		return false;
	}

	private ArrayList<Cell> getValidNeighbors(Cell center) {
		ArrayList<Cell> result = new ArrayList<>();
		for (int x = center.x - 1; x <= center.x + 1; x++) {
			for (int y = center.y - 1; y <= center.y + 1; y++) {
				if (x >= 0 && y >= 0 && x < 4 && y < 4) {
					Cell cell = cells[x][y];
					if (!cell.used) result.add(cell);
				}
			}
		}
		return result;
	}

	public void refreshCells() {
		for (int x = 0; x < 4; x++) {
			for (int y = 0; y < 4; y++) {
				cells[x][y].used = false;
			}
		}
	}

	public void display() {
		for (int x = 0; x < 4; x++) {
			for (int y = 0; y < 4; y++) {
				System.out.print(cells[x][y].letter + " ");
			}
			System.out.println();
		}
	}
}

class Cell {
	final int x, y;
	char letter;
	boolean used;

	public Cell(int x, int y) {
		this.x = x;
		this.y = y;
	}
}
