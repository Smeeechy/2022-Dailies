/*
Given an array of integers, find the first missing positive integer in linear time and constant space. 
In other words, find the lowest positive integer that does not exist in the array. 
The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/

// this is nowhere near a satisfactory solution, but i need to go to bed

import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		int[] nums = Arrays.stream(args).mapToInt(Integer::parseInt).toArray();
		System.out.println(Arrays.toString(nums));
		System.out.println(firstMissingPositive(nums));
	}

	static int firstMissingPositive(int[] nums) {
		int counter = 1;
		for (int num : nums) {
			if (counter == num) {
				counter++;
			}
		}
		return counter;
	}
}
