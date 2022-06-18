/*
Given a 2D matrix of characters and a target word, write a function that returns whether the word can be found in the matrix by going 
left-to-right, or up-to-down.

For example, given the following matrix:

[['F', 'A', 'C', 'I'],
 ['O', 'B', 'Q', 'P'],
 ['A', 'N', 'O', 'B'],
 ['M', 'A', 'S', 'S']]

and the target word 'FOAM', you should return true, since it's the leftmost column. Similarly, given the target word 'MASS', you should 
return true, since it's the last row.
*/

import java.lang.StringBuilder;
import java.util.ArrayList;

class Main {
	public static void main(String[] args) {
		// no simple way to parse this from input comes to mind so i'm hardcoding it
		char[][] board = new char[][] {{'F', 'A', 'C', 'I'}, {'O', 'B', 'Q', 'P'}, {'A', 'N', 'O', 'B'}, {'M', 'A', 'S', 'S'}};
		
		StringBuilder builderH = new StringBuilder();
		StringBuilder builderV = new StringBuilder();
		ArrayList<String> list = new ArrayList<>();
		for (int i = 0; i < board.length; i++) {
			for (int j = 0; j < board[i].length; j++) {
				builderH.append(board[i][j]);
				builderV.append(board[j][i]);
			}
			list.add(builderH.toString());
			list.add(builderV.toString());
			builderH = new StringBuilder();
			builderV = new StringBuilder();
		}

		for (String word : args) {
			System.out.println(word + " is " + (list.contains(word.toUpperCase()) ? "" : "not ") + "in this board");
		}
	}
}
