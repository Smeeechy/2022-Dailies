/*
Let A be an N by M matrix in which every row and every column is sorted.

Given i1, j1, i2, and j2, compute the number of elements of M smaller than M[i1, j1] and larger than M[i2, j2].

For example, given the following matrix:

[[1, 3, 7, 10, 15, 20],
 [2, 6, 9, 14, 22, 25],
 [3, 8, 10, 15, 25, 30],
 [10, 11, 12, 23, 30, 35],
 [20, 25, 30, 35, 40, 45]]
And i1 = 1, j1 = 1, i2 = 3, j2 = 3, return 15 as there are 15 numbers in the matrix smaller than 6 or greater than 23.
*/

import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		int[][] matrix = new int[][] {
			{1, 3, 7, 10, 15, 20},
			{2, 6, 9, 14, 22, 25},
			{3, 8, 10, 15, 25, 30},
			{10, 11, 12, 23, 30, 35},
			{20, 25, 30, 35, 40, 45}
		};
		printMatrix(matrix);

		int i1 = Integer.parseInt(args[0]);
		int j1 = Integer.parseInt(args[1]);
		int i2 = Integer.parseInt(args[2]);
		int j2 = Integer.parseInt(args[3]);

		int min = matrix[i1][j1];
		int max = matrix[i2][j2];
		int oobCount = 0;

		for (int row = 0; row < matrix.length; row++) {
			for (int col = 0; col < matrix[0].length; col++) {
				int num = matrix[row][col];
				if (num < min || num > max) oobCount++;
			}
		}

		System.out.println("There are " + oobCount + " numbers less than " + min + " or greater than " + max);
	}

	static void printMatrix(int[][] matrix) {
		for (int[] row : matrix) {
			System.out.println(Arrays.toString(row));
		}
	}
}
