/*
Given an array of integers, find the maximum XOR of any two elements.
*/

import java.util.ArrayList;
import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		int nums[] = Arrays.stream(args).mapToInt(Integer::parseInt).toArray();

		int maxXOR[] = { -1, -1, -1 };
		for (int i = 0; i < nums.length; i++) {
			for (int j = i + 1; j < nums.length; j++) {
				int XOR = nums[i] ^ nums[j];
				System.out.println(nums[i] + " ^ " + nums[j] + " = " + XOR);
				if (XOR > maxXOR[0]) {
					maxXOR[0] = XOR;
					maxXOR[1] = nums[i];
					maxXOR[2] = nums[j];
				}
			}
		}

		System.out.println(Arrays.toString(maxXOR));
	}
}
