/*
You have an N by N board. Write a function that, given N, returns the number of possible arrangements of 
the board where N queens can be placed on the board without threatening each other, i.e. no two queens 
share the same row, column, or diagonal.
*/

import java.util.ArrayList;
import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		int n = Integer.parseInt(args[0]);

		Board board = new Board(n);

		System.out.println(board);
	}

	// unused for prompt
	public static void addBlackPieces(Board board) {
		board.add(new Rook(0, 0, false), 0, 0);
		board.add(new Knight(1, 0, false), 1, 0);
		board.add(new Bishop(2, 0, false), 2, 0);
		board.add(new Queen(3, 0, false), 3, 0);
		board.add(new King(4, 0, false), 4, 0);
		board.add(new Bishop(5, 0, false), 5, 0);
		board.add(new Knight(6, 0, false), 6, 0);
		board.add(new Rook(7, 0, false), 7, 0);

		for (int i = 0; i < 8; i++) {
			board.add(new Pawn(i, 1, false), i, 1);
		}
	}

	// unused for prompt
	public static void addWhitePieces(Board board) {
		board.add(new Rook(0, 7, true), 0, 7);
		board.add(new Knight(1, 7, true), 1, 7);
		board.add(new Bishop(2, 7, true), 2, 7);
		board.add(new Queen(3, 7, true), 3, 7);
		board.add(new King(4, 7, true), 4, 7);
		board.add(new Bishop(5, 7, true), 5, 7);
		board.add(new Knight(6, 7, true), 6, 7);
		board.add(new Rook(7, 7, true), 7, 7);

		for (int i = 0; i < 8; i++) {
			board.add(new Pawn(i, 1, true), i, 6);
		}
	}
}

class Board {
	Cell[][] grid;

	Board(int n) {
		this.grid = new Cell[n][n];
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				this.grid[j][i] = new Cell(j, i);
			}
		}
	}

	void add(Piece piece, int x, int y) {
		int n = this.grid.length;
		if (x < 0 || y < 0 || x >= n || y >= n) return;
		else this.grid[y][x].setPiece(piece);
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		for (Cell[] row : this.grid) {
			for (Cell cell : row) {
				builder.append(cell);
			}
			builder.append("\n");
		}
		return builder.toString();
	}
}

class Cell {
	int x, y;
	Piece piece;

	Cell(int x, int y) {
		this.x = x;
		this.y = y;
	}

	void setPiece(Piece piece) {
		this.piece = piece;
	}

	Piece getPiece() {
		return this.piece;
	}

	@Override
	public String toString() {
		if (this.piece != null) {
			return this.piece.toString();
		} else return ".";
	}
}

abstract class Piece {
	int x, y;
	boolean isWhite;
	String name;

	Piece(int x, int y, boolean isWhite, String name) {
		this.x = x;
		this.y = y;
		this.isWhite = isWhite;
		if (isWhite) this.name = name.toLowerCase();
		else this.name = name.toUpperCase();
	}

	// ArrayList<Cell> getValidMoves();

	@Override
	public String toString() {
		return this.name;
	}
}

class King extends Piece {
	King(int x, int y, boolean isWhite) {
		super(x, y, isWhite, "K");
	}
}

class Queen extends Piece {
	Queen(int x, int y, boolean isWhite) {
		super(x, y, isWhite, "Q");
	}
}

class Bishop extends Piece {
	Bishop(int x, int y, boolean isWhite) {
		super(x, y, isWhite, "B");
	}
}

class Knight extends Piece {
	Knight(int x, int y, boolean isWhite) {
		super(x, y, isWhite, "N");
	}
}

class Rook extends Piece {
	Rook(int x, int y, boolean isWhite) {
		super(x, y, isWhite, "R");
	}
}

class Pawn extends Piece {
	Pawn(int x, int y, boolean isWhite) {
		super(x, y, isWhite, "P");
	}
}
