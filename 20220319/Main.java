/*
Given an array of numbers, find the maximum sum of any contiguous subarray of the array.

For example, given the array [34, -50, 42, 14, -5, 86], the maximum sum would be 137, since we would take 
elements 42, 14, -5, and 86.

Given the array [-5, -1, -8, -9], the maximum sum would be 0, since we would not take any elements.

Do this in O(N) time.
*/

import java.util.Arrays;
import java.util.ArrayList;

class Main {
	public static void main(String[] args) {
		int[] nums = Arrays.stream(args).mapToInt(Integer::parseInt).toArray();
		Integer[] result = maxContiguousSubarray(nums);
		System.out.println(Arrays.toString(result));
		System.out.println("sum = " + Arrays.stream(result).mapToInt(n -> n).sum());
	}

	public static Integer[] maxContiguousSubarray(int[] nums) {
		ArrayList<Integer> maxCS = new ArrayList<>();
		int maxCSSum = 0;
		for (int i = 0; i < nums.length; i++) {
			for (int j = i + 1; j < nums.length; j++) {
				ArrayList<Integer> CS = new ArrayList<>();
				for (int index = i; index <= j; index++) {
					CS.add(nums[index]);
				}
				int sum = CS.stream().mapToInt(n -> n).sum();
				if (sum > maxCSSum) {
					maxCSSum = sum;
					maxCS = CS;
				}
			}
		}
		return maxCS.toArray(Integer[]::new);
	}
}
