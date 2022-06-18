/*
Given an array of integers, determine whether it contains a Pythagorean 
triplet. Recall that a Pythogorean triplet (a, b, c) is defined by the 
equation a2+ b2= c2.
*/

import java.util.Arrays;
import java.util.stream.IntStream;

class Main {
	public static void main(String[] args) {
		int[] nums;
		if (args.length == 0) nums = IntStream.rangeClosed(0, 100).toArray();
		else if (args.length == 1) nums = IntStream.rangeClosed(0, Integer.parseInt(args[0]) + 1).toArray();
		else if (args.length == 2) nums = IntStream.rangeClosed(Integer.parseInt(args[0]), Integer.parseInt(args[1]) + 1).toArray();
		else nums = Arrays.stream(args).mapToInt(Integer::parseInt).toArray();
		tripletSearch(nums);
	}

	public static void tripletSearch(int[] nums) {
		int tripletCount = 0;
		for (int x = 0; x < nums.length; x++) {
			int a = nums[x];
			for (int y = x + 1; y < nums.length; y++) {
				int b = nums[y];
				for (int z = y + 1; z < nums.length; z++) {
					int c = nums[z];
					if (a * a + b * b == c * c) {
						tripletCount++;
						System.out.println("#" + tripletCount + ": (" + a + ", " + b + ", " + c + ")");
						System.out.println(a + "² + " + b + "² = " + c + "²");
						System.out.println((a * a) + " + " + (b * b) + " = " + (c * c));
						System.out.println();
					}
				}
			}
		}
		if (tripletCount == 0) System.out.println("No pythagorean triplets found.");
	}
}
