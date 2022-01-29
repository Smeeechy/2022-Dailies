/*
You have N stones in a row, and would like to create from them a pyramid. This pyramid should be constructed such that the height of each 
stone increases by one until reaching the tallest stone, after which the heights decrease by one. In addition, the start and end stones of 
the pyramid should each be one stone high.

You can change the height of any stone by paying a cost of 1 unit to lower its height by 1, as many times as necessary. Given this information, 
determine the lowest cost method to produce this pyramid.

For example, given the stones [1, 1, 3, 3, 2, 1], the optimal solution is to pay 2 to create [0, 1, 2, 3, 2, 1].
*/

import java.util.Arrays;

class Main {
	static int[] stones;

	public static void main(String[] args) {
		stones = Arrays.stream(args).mapToInt(Integer::parseInt).toArray();
		
	}

	public static int leftMax(int startIndex) {
		
	}

	public static int leftCost(int index) {
		
	}

	public static int leftCheck(int index) {
		
	}

	public static int rightMax(int startIndex) {
		
	}

	public static int rightCost(int index) {
		
	}

	public static int rightCheck(int index) {
		
	}
}
