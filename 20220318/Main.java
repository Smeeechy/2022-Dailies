/*
Given a string and a number of lines k, print the string in zigzag form. 
In zigzag, characters are printed out diagonally from top left to bottom right until reaching the kth line, then 
back up to top right, and so on.

For example, given the sentence "thisisazigzag" and k = 4, you should print:

t     a     g
 h   s z   a
  i i   i z
   s     g
*/

class Main {
	public static void main(String[] args) {
		char[] chars = args[0].toCharArray();
		int k = Integer.parseInt(args[1]);
		char[][] grid = new char[k][chars.length];

		for (int i = 0; i < k; i++) {
			for (int j = 0; j < chars.length; j++) {
				grid[i][j] = ' ';
			}
		}

		int row = 0;
		boolean down = true;
		for (int col = 0; col < chars.length; col++) {
			grid[row][col] = chars[col];
			if (row == (k - 1)) down = false;
			if (row == 0) down = true;
			if (down) row++;
			else row--;
		}

		for (int i = 0; i < k; i++) {
			for (int j = 0; j < chars.length; j++) {
				System.out.print(grid[i][j]);
			}
			System.out.println();
		}
	}
}
