/*
You have N stones in a row, and would like to create from them a pyramid. This pyramid should be constructed such that the height of each 
stone increases by one until reaching the tallest stone, after which the heights decrease by one. In addition, the start and end stones of 
the pyramid should each be one stone high.

You can change the height of any stone by paying a cost of 1 unit to lower its height by 1, as many times as necessary. Given this information, 
determine the lowest cost method to produce this pyramid.

For example, given the stones [1, 1, 3, 3, 2, 1], the optimal solution is to pay 2 to create [0, 1, 2, 3, 2, 1].
*/

// this is already over-engineered to all hell and i'm bored with it so this is probably the best it's gonna get

import java.util.Arrays;
import java.util.Collections;

class Main {
	static int[] stones;

	public static void main(String[] args) {
		stones = Arrays.stream(args).mapToInt(Integer::parseInt).toArray();

		int leftStartIndex = leftMax(0);
		int leftEndIndex = leftCheck(leftStartIndex);
/*		System.out.println("left triangle starts at index " + leftStartIndex + " and ends at index " + leftEndIndex + ":");
		for (int i = leftStartIndex; i <= leftEndIndex; i++) {
			System.out.print(stones[i] + " ");
		} */

		int rightEndIndex = rightMax(stones.length - 1);
		int rightStartIndex = rightCheck(rightEndIndex);
/*              System.out.println("right triangle starts at index " + rightStartIndex + " and ends at index " + rightEndIndex + ":");
                for (int i = rightStartIndex; i <= rightEndIndex; i++) {
                        System.out.print(stones[i] + " ");
                } */

		int startIndex, endIndex;
		if (leftStartIndex > rightStartIndex) startIndex = leftStartIndex;
		else startIndex = rightStartIndex;
		if (leftEndIndex < rightEndIndex) endIndex = leftEndIndex;
		else endIndex = rightEndIndex;

		System.out.println("triangle starts at index " + startIndex + " and ends at index " + endIndex + ":");

		int max = Arrays.stream(stones).max().getAsInt();

		for (int row = max; row >= 0; row--) {
			for (int col = 0; col < stones.length; col++) {
				if (row == 0) System.out.print(col + " ");
				else if (stones[col] >= row) System.out.print("x ");
				else System.out.print("  ");
			}
			System.out.println();
		}

		// TODO: implement cost methods and print cost to console
	}

	public static int leftMax(int startIndex) {
		int index = 0;
		int max = 0;
		for (int i = startIndex; i < stones.length; i++) {
			int len = 1;
			for (int j = i + 1; j < stones.length; j++) {
				if (stones[j] > len) {
					len++;
				} else break;
			}
			if (len >= max) {
				max = len;
				index = i;
			}
		}
		return index;
	}

	public static int leftCost(int index) {
		return -1;
	}

	public static int leftCheck(int index) {
		boolean valid = true;
		int curValue = 1;
		int curIndex = index;
		while (stones[++curIndex] > curValue++) {}
		curValue--;
		while (curValue-- >= 1 && ++curIndex < stones.length) {
			if (curIndex > stones.length - 1) {
				valid = false;
				break;
			}
			if (stones[curIndex] < curValue) {
				valid = false;
				break;
			}
			
		}
		if (valid) return --curIndex;
		else return index;
	}

	public static int rightMax(int startIndex) {
                int index = stones.length - 1;
                int max = 0;
                for (int i = startIndex; i >= 0; i--) {
                        int len = 1;
                        for (int j = i - 1; j >= 0; j--) {
                                if (stones[j] > len) {
                                        len++;
                                } else break;
                        }
                        if (len >= max) {
                                max = len;
                                index = i;
                        }
                }
                return index;
	}

	public static int rightCost(int index) {
		return -1;
	}

	public static int rightCheck(int index) {
		boolean valid = true;
                int curValue = 1;
                int curIndex = index;
                while (stones[--curIndex] > curValue++) {}
                curValue--;
                while (curValue-- >= 1 && --curIndex >= 0) {
                        if (curIndex < 0) {
                                valid = false;
                                break;
                        }
                        if (stones[curIndex] < curValue) {
                                valid = false;
                                break;
                        }

                }
                if (valid) return ++curIndex;
                else return index;		
	}
}
