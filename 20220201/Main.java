/*
This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		int k = Integer.parseInt(args[0]);
		int[] nums = new int[args.length - 1];
		for (int i = 0; i < nums.length; i++) {
			nums[i] = Integer.parseInt(args[i + 1]);
		}
		canSumTo(nums, k);
	}

	public static void canSumTo(int[] nums, int k) {
		boolean found = false;
		for (int i = 0; i < nums.length + 1 / 2; i++) {
			for (int j = i + 1; j < nums.length; j++) {
				if (nums[i] + nums[j] == k) {
					System.out.println(Arrays.toString(nums) + ": " + k + " = " + nums[i] + " + " + nums[j]);
					found = true;
				}
			}
		}
		if (!found) System.out.println(Arrays.toString(nums) + ": No valid pair found.");
	}
}
