/*
You have an N by N board. Write a function that, given N, returns the number of possible arrangements of 
the board where N queens can be placed on the board without threatening each other, i.e. no two queens 
share the same row, column, or diagonal.
*/

import java.util.ArrayList;
import java.util.HashSet;

class Main {
	public static void main(String[] args) {
		int n = Integer.parseInt(args[0]);

		Board board = new Board(n);

		for (int x = 0; x < board.length; x++) {
			for (int y = 0; y < board.length; y++) {
				board.add(new Queen(board, x, y, true), x, y);
			}
		}

		for (int x = 0; x < board.length; x++) {
			for (int y = 0; y < board.length; y++) {
				Piece queen = board.pieceAt(x, y);
				if (queen == null) continue;
				for (Cell cell : queen.getValidMoves()) {
					cell.setPiece(null);
				}
			}
		}

		System.out.println(board);
	}
}

class Board {
	final Cell[][] grid;
	final int length;

	Board(int n) {
		this.length = n;
		this.grid = new Cell[n][n];
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				this.grid[j][i] = new Cell(j, i);
			}
		}
	}

	void add(Piece piece, int x, int y) {
		int n = this.length;
		if (x < 0 || y < 0 || x >= n || y >= n) return;
		else this.grid[y][x].setPiece(piece);
	}

	Cell cellAt(int x, int y) {
		int n = this.length;
		if (x < 0 || y < 0 || x >= n || y >= n) return null;
		else return grid[y][x];
	}

	Piece pieceAt(int x, int y) {
		int n = this.length;
		if (x < 0 || y < 0 || x >= n || y >= n) return null;
		else return grid[y][x].piece;
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
	Board board;
	int x, y;
	boolean isWhite;
	String name;

	Piece(Board board, int x, int y, boolean isWhite, String name) {
		this.board = board;
		this.x = x;
		this.y = y;
		this.isWhite = isWhite;
		if (isWhite) this.name = name.toLowerCase();
		else this.name = name.toUpperCase();
	}

	void move(int x, int y) {
		this.x = x;
		this.y = y;
	}

	abstract ArrayList<Cell> getValidMoves();

	@Override
	public String toString() {
		return this.name;
	}
}

class King extends Piece {
	King(Board board, int x, int y, boolean isWhite) {
		super(board, x, y, isWhite, "K");
	}

	ArrayList<Cell> getValidMoves() {
		ArrayList<Cell> validMoves = new ArrayList<>();
		validMoves.add(this.board.cellAt(this.x - 1, this.y));
		validMoves.add(this.board.cellAt(this.x + 1, this.y));
		validMoves.add(this.board.cellAt(this.x, this.y + 1));
		validMoves.add(this.board.cellAt(this.x, this.y - 1));
		return validMoves;
	}
}

class Queen extends Piece {
	Queen(Board board, int x, int y, boolean isWhite) {
		super(board, x, y, isWhite, "Q");
	}

	ArrayList<Cell> getValidMoves() {
		HashSet<Cell> validMoves = new HashSet<>();
		for (int i = 0; i < this.board.length; i++) {
			validMoves.add(this.board.cellAt(this.x + i, this.y + i));
			validMoves.add(this.board.cellAt(this.x + i, this.y - i));
			validMoves.add(this.board.cellAt(this.x - i, this.y + i));
			validMoves.add(this.board.cellAt(this.x - i, this.y - i));			
		}
		for (int i = 0; i < this.board.length; i++) {
			validMoves.add(this.board.cellAt(i, this.y));
			validMoves.add(this.board.cellAt(this.x, i));
		}
		validMoves.remove(this.board.cellAt(this.x, this.y));
		validMoves.remove(null);
		return new ArrayList<Cell>(validMoves);
	}
}

class Bishop extends Piece {
	Bishop(Board board, int x, int y, boolean isWhite) {
		super(board, x, y, isWhite, "B");
	}

	ArrayList<Cell> getValidMoves() {
		ArrayList<Cell> validMoves = new ArrayList<>();
		for (int i = 0; i < this.board.length; i++) {
			validMoves.add(this.board.cellAt(this.x + i, this.y + i));
			validMoves.add(this.board.cellAt(this.x + i, this.y - i));
			validMoves.add(this.board.cellAt(this.x - i, this.y + i));
			validMoves.add(this.board.cellAt(this.x - i, this.y - i));			
		}
		validMoves.remove(this.board.cellAt(this.x, this.y));
		return validMoves;
	}
}

class Knight extends Piece {
	Knight(Board board, int x, int y, boolean isWhite) {
		super(board, x, y, isWhite, "N");
	}

	ArrayList<Cell> getValidMoves() {
		ArrayList<Cell> validMoves = new ArrayList<>();
		
		return validMoves;
	}
}

class Rook extends Piece {
	Rook(Board board, int x, int y, boolean isWhite) {
		super(board, x, y, isWhite, "R");
	}

	ArrayList<Cell> getValidMoves() {
		ArrayList<Cell> validMoves = new ArrayList<>();
		for (int i = 0; i < this.board.length; i++) {
			validMoves.add(this.board.cellAt(i, this.y));
			validMoves.add(this.board.cellAt(this.x, i));
		}
		validMoves.remove(this.board.cellAt(this.x, this.y));
		return validMoves;
	}
}

class Pawn extends Piece {
	Pawn(Board board, int x, int y, boolean isWhite) {
		super(board, x, y, isWhite, "P");
	}

	ArrayList<Cell> getValidMoves() {
		ArrayList<Cell> validMoves = new ArrayList<>();
		
		return validMoves;
	}
}
