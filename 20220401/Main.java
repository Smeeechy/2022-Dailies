/*
Given an integer list where each number represents the number of hops you can make, determine whether you can reach 
to the last index starting at index 0.

For example, [2, 0, 1, 0] returns True while [1, 1, 0, 1] returns False.
*/

import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		int[] nums = Arrays.stream(args).mapToInt(Integer::parseInt).toArray();

		System.out.println(hoppable(nums) ? "Hoppable" : "Not hoppable");
	}

	public static boolean hoppable(int[] nums) {
		int hops = 1;
		for (int i = 0; i < nums.length; i++) {
			hops += nums[i] - 1;
			if (hops == 0 && i != nums.length - 1) return false;
		}
		return true;
	}
}
