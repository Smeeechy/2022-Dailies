/*
Given a circular array, compute its maximum subarray sum in O(n) time. A subarray can be empty, and in this case the sum is 0.

For example, given [8, -1, 3, 4], return 15 as we choose the numbers 3, 4, and 8 where the 8 is obtained from wrapping around.

Given [-4, 5, 1, 0], return 6 as we choose the numbers 5 and 1.
*/

import java.util.ArrayList;
import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		int[] nums = Arrays.stream(args).mapToInt(Integer::parseInt).toArray();

		System.out.println(Arrays.toString(nums));
		System.out.println(maxSubarraySum(nums));
	}

	public static int maxSubarraySum(int[] nums) {
		int maxSum = 0;
		for (int i = 0; i < nums.length; i++) {
			int sum = maxSumFromIndex(nums, i);
			if (sum > maxSum) maxSum = sum;
		}
		return maxSum;
	}

	private static int maxSumFromIndex(int[] nums, int fromIndex) {
		int sum = 0;
		int iter = 0;
		while (iter < nums.length) {
			int index = iter + fromIndex;
			if (index >= nums.length) index -= nums.length; 
			if (nums[index] < 0) break;
			else sum += nums[index];
			iter++;
		}
		return sum;
	}
}
