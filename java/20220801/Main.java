/*
Given a sorted n by m integer matrix and a target value, determine the indices of the target value or [-1, -1] if it does not exist.
*/

import java.util.Arrays;
import java.util.InputMismatchException;
import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    int rows = Integer.parseInt(args[0]);
    int cols = Integer.parseInt(args[1]);
    int target = Integer.parseInt(args[2]);
    int[][] matrix = new int[rows][cols];
    try (Scanner scanner = new Scanner(System.in)) {
      for (int row = 0; row < rows; row++) {
        int[] rowValues = Arrays.stream(scanner.nextLine().split(" "))
            .mapToInt(Integer::parseInt)
            .toArray();
        if (rowValues.length != cols)
          throw new InputMismatchException("Row data has wrong length.");
        matrix[row] = rowValues;
      }
      int[] result = Program.searchInSortedMatrix(matrix, target);
      System.out.println(Arrays.toString(result));
    } catch (Exception e) {
      System.out.println(e.getMessage());
    }
	}
}

class Program {
  // naïve algorithm, runs in O(n * m) time 
  public static int[] slowSearchInSortedMatrix(int[][] matrix, int target) {
    for (int rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
      for (int colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
        if (matrix[rowIndex][colIndex] == target) return new int[] {rowIndex, colIndex};
      }
    }
    return new int[] {-1, -1};
  }

  // optimized solution, runs in O(n + m) time
  public static int[] searchInSortedMatrix(int[][] matrix, int target) {
    int rowIndex = 0;
    int colIndex = matrix[rowIndex].length - 1;
    while (rowIndex < matrix.length && colIndex >= 0) {
      int current = matrix[rowIndex][colIndex];
      if (current > target) colIndex--;
      else if (current < target) rowIndex++;
      else return new int[] {rowIndex, colIndex};
    }
    return new int[] {-1, -1};
  }
}
