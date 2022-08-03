/*
Implement a sudoku solver.
*/

import java.util.*;
import java.util.stream.Collectors;

class Main {
  public static void main(String[] args) {
    ArrayList<ArrayList<Integer>> board = new ArrayList<>();
    Scanner scanner = new Scanner(System.in);
    for (int row = 0; row < 9; row++) {
      List<Integer> rowData = Arrays.stream(scanner.nextLine().trim().split(" "))
          .map(Integer::parseInt)
          .collect(Collectors.toList());
      board.add(new ArrayList<>(rowData));
    }
    scanner.close();
    board = solveSudoku(board);
    printBoard(board);
  }
  
  public static ArrayList<ArrayList<Integer>> solveSudoku(ArrayList<ArrayList<Integer>> board) {
    // create list of cells that need to be solved
    ArrayList<Integer[]> unknowns = new ArrayList<>();
    for (int row = 0; row < 9; row++) {
      for (int col = 0; col < 9; col++) {
        if (board.get(row).get(col) == 0) unknowns.add(new Integer[] { row, col });
      }
    }

    // backtracking algorithm
    int unknownIndex = 0;
    while (unknownIndex < unknowns.size()) {
      // get row and column indices from list of unknowns
      Integer[] unknown = unknowns.get(unknownIndex);
      int row = unknown[0];
      int col = unknown[1];

      // get current guess at those indices
      int currentGuess = board.get(row).get(col);

      // filter options to only those that are valid according to sudoku rules
      // AND above current cell guess (to avoid checking same options indefinitely)
      List<Integer> optionsList = getValidOptions(board, row, col)
          .stream()
          .filter(n -> n >= currentGuess)
          .collect(Collectors.toList());
      ArrayList<Integer> options = new ArrayList<>(optionsList);

      // try next valid option or backtrack if none exist
      if (options.size() > 0) {
        // place first option in board and move to next unknown
        board.get(row).set(col, options.get(0));
        unknownIndex++;
      } else {
        // place a zero in the current board position and move to previous unknown
        board.get(row).set(col, 0);
        unknownIndex--;
      }
    }

    return board;
  }

  // returns reduced list of valid options using below helper methods
  public static ArrayList<Integer> getValidOptions(ArrayList<ArrayList<Integer>> board, int rowIndex, int colIndex) {
    ArrayList<Integer> validOptions = new ArrayList<>(List.of(1, 2, 3, 4, 5, 6, 7, 8, 9));
    validOptions.retainAll(getMissingDigits(getSquare(board, rowIndex, colIndex)));
    validOptions.retainAll(getMissingDigits(getRow(board, rowIndex)));
    validOptions.retainAll(getMissingDigits(getCol(board, colIndex)));
    return validOptions;
  }

  // returns list of elements contained in the local square of given row and
  // column indices
  public static ArrayList<Integer> getSquare(ArrayList<ArrayList<Integer>> board, int rowIndex, int colIndex) {
    ArrayList<Integer> squareData = new ArrayList<>();
    int startRow = rowIndex - (rowIndex % 3);
    int startCol = colIndex - (colIndex % 3);
    for (int row = startRow; row < startRow + 3; row++) {
      for (int col = startCol; col < startCol + 3; col++) {
        squareData.add(board.get(row).get(col));
      }
    }
    return squareData;
  }

  // does nothing special but exists for consistency
  public static ArrayList<Integer> getRow(ArrayList<ArrayList<Integer>> board, int rowIndex) {
    return board.get(rowIndex);
  }

  // iterates through rows and just takes element at colIndex
  public static ArrayList<Integer> getCol(ArrayList<ArrayList<Integer>> board, int colIndex) {
    ArrayList<Integer> colData = new ArrayList<>();
    for (int row = 0; row < 9; row++) colData.add(board.get(row).get(colIndex));
    return colData;
  }

  // returns a list of numbers 1-9 that are NOT included in the given digit list
  public static ArrayList<Integer> getMissingDigits(ArrayList<Integer> digits) {
    List<Integer> filteredNums = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9)
        .stream()
        .filter(n -> !digits.contains(n))
        .collect(Collectors.toList());
    return new ArrayList<Integer>(filteredNums);
  }

  public static void printBoard(ArrayList<ArrayList<Integer>> board) {
    System.out.println("\n-------------------------");
    for (int row = 0; row < 9; row++) {
      System.out.print("| ");
      for (int col = 0; col < 9; col++) {
        System.out.print(board.get(row).get(col));
        if (col % 3 == 2) System.out.print(" | ");
        else System.out.print(" ");
      }
      if (row % 3 == 2) System.out.println("\n-------------------------");
      else System.out.println();
    }
    System.out.println();
  }
}
