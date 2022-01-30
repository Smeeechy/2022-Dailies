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

		int leftIndex = leftMax(0);
		int leftEndIndex = leftCheck(leftIndex);
		System.out.println(leftEndIndex);

		// 1 find index of longest left side using leftMax()
		// 2 repeat until leftCheck() succeeds
		// 3 repeat for right side
		// 4 repeat until left and right intersect
		// 5 intersection of the two should be max area
		
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
		System.out.println("increasing from " + curIndex);
		while (stones[++curIndex] > curValue++) {
			System.out.print("curIndex=" + curIndex + " ");
			System.out.println("curValue=" + curValue);
		}
		System.out.println("decreasing from " + curIndex);
		curValue--;
		while (curValue-- >= 1 && ++curIndex < stones.length) {
			System.out.print("curIndex=" + curIndex + " ");
			System.out.println("curValue=" + curValue);
			if (curIndex > stones.length - 1) {
				System.out.println("oob at " + curIndex);
				valid = false;
				break;
			}
			if (stones[curIndex] < curValue) {
				System.out.println("too short at " + curIndex);
				valid = false;
				break;
			}
			
		}
		if (valid) return --curIndex;
		else return index;
	}

	public static int rightMax(int startIndex) {
		return -1;
	}

	public static int rightCost(int index) {
		return -1;
	}

	public static int rightCheck(int index) {
		return -1;		
	}
}
