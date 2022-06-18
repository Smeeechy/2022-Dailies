/*
Given a linked list, rearrange the node values such that they appear in alternating low -> high -> low -> high ... form. For example, 
given 1 -> 2 -> 3 -> 4 -> 5, you should return 1 -> 3 -> 2 -> 5 -> 4.
*/

// i did this with arrays but this is the gist of what i'd do

import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		int[] nums = Arrays.stream(args).mapToInt(Integer::parseInt).toArray();
		System.out.println(Arrays.toString(nums));

		Arrays.sort(nums);

		for (int i = 1; i < nums.length - 1; i += 2) {
			int temp = nums[i];
			nums[i] = nums[i + 1];
			nums[i + 1] = temp;
		}
		System.out.println(Arrays.toString(nums));
	}
}
