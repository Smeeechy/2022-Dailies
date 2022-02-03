/*
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the 
original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected 
output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		int[] nums = Arrays.stream(args).mapToInt(Integer::parseInt).toArray();
		int[] result = new int[nums.length];
		for (int i = 0; i < nums.length; i++) {
			int product = 1;
			for (int j = 0; j < nums.length; j++) {
				if (i == j) continue;
				product *= nums[j];
			}
			result[i] = product;
		}

		System.out.println(Arrays.toString(result));
	}
}
