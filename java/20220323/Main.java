/*
You are given a 2-d matrix where each cell represents number of coins in that cell. Assuming we start at matrix[0][0], 
and can only move right or down, find the maximum number of coins you can collect by the bottom right corner.

For example, in this matrix

0 3 1 1
2 0 0 4
1 5 3 1
The most we can collect is 0 + 2 + 1 + 5 + 3 + 1 = 12 coins.
*/

import java.util.Arrays;
import java.util.ArrayList;

class Main {
	public static void main(String[] args) {
		int[][] matrix = setupMatrix(args);
		int result = maxPathSum(0, 0, matrix);
		System.out.println(result);
	}

	public static int[][] setupMatrix(String[] args) {
		int rows = Integer.parseInt(args[0]);
		int cols = Integer.parseInt(args[1]);
		int[][] matrix = new int[rows][cols];
		int index = 2;
		for (int x = 0; x < rows; x++) {
			for (int y = 0; y < cols; y++) {
				matrix[x][y] = Integer.parseInt(args[index++]);
			}
		}
		return matrix;
	}

	public static int maxPathSum(int x, int y, int[][] matrix) {
		if (x == matrix.length - 1 && y == matrix[0].length - 1) return matrix[x][y];
		else if (x == matrix.length - 1) return matrix[x][y] + maxPathSum(x, y + 1, matrix);
		else if (y == matrix[0].length - 1) return matrix[x][y] + maxPathSum(x + 1, y, matrix);
		else return matrix[x][y] + (int) Math.max(maxPathSum(x + 1, y, matrix), maxPathSum(x, y + 1, matrix));
	}
}
