/*
The game of Nim is played as follows. Starting with three heaps, 
each containing a variable number of items, two players take turns 
removing one or more items from a single pile. The player who 
eventually is forced to take the last stone loses. For example, 
if the initial heap sizes are 3, 4, and 5, a game could be played 
as shown below:
-
  A  |  B  |  C
-----------------
  3  |  4  |  5
  3  |  1  |  3
  3  |  1  |  3
  0  |  1  |  3
  0  |  1  |  0
  0  |  0  |  0 
In other words, to start, the first player takes three items from 
pile B. The second player responds by removing two stones from 
pile C. The game continues in this way until player one takes last 
stone and loses.

Given a list of non-zero starting values [a, b, c], and assuming 
optimal play, determine whether the first player has a forced win.
*/

// The prompt/diagram does an awful job of explaining the game imo

class Main {
	public static void main(String[] args) {
		boolean winnable = nim(Integer.parseInt(args[0]), Integer.parseInt(args[1]), Integer.parseInt(args[2]));
		if (winnable) System.out.println("P1 wins");
		else System.out.println("P1 loses");
	}

	// @returns: true if the starting nim-sum is not 0
	private static boolean nim(int a, int b, int c) {
		return (a ^ b ^ c) > 0;
	}

//	// tells us when to start using end-game strategy
//	private static boolean isEnding(int a, int b, int c) {
//		return (a >= 2) ^ (b >= 2) ^ (c >= 2);
//	}
}
