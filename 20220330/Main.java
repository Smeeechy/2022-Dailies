/*
Write a function that rotates a list by k elements. For example, [1, 2, 3, 4, 5, 6] rotated by two becomes [3, 4, 5, 6, 1, 2]. 
Try solving this without creating a copy of the list. How many swap or move operations do you need?
*/

import java.util.Arrays;
import java.util.ArrayList;

class Main {
	public static void main(String[] args) {
		int k = Integer.parseInt(args[0]);
		int[] nums = Arrays.stream(args).skip(1).mapToInt(Integer::parseInt).toArray();

		System.out.println(Arrays.toString(nums));
		rotate(nums, k);
		System.out.println(Arrays.toString(nums));
	}

	public static void rotate(int[] nums, int k) {
		int swapCount = 0;
		int temp;
		for (int i = 0; i + k < nums.length; i++) {
			temp = nums[i];
			nums[i] = nums[i + k];
			nums[i + k] = temp;
			swapCount++;
		}
		System.out.println("performed " + swapCount + " swaps");
		System.out.println("(length - k) = (" + nums.length + " - " + k + ") = " + (nums.length - k));
	}
}
