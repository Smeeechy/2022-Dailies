/*
Given an array of integers, write a function to determine whether the array could become non-decreasing by modifying 
at most 1 element.

For example, given the array [10, 5, 7], you should return true, since we can modify the 10 into a 1 to make the array 
non-decreasing.

Given the array [10, 5, 1], you should return false, since we can't modify any one element to get a non-decreasing array.
*/

import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		int[] arr = Arrays.stream(args).mapToInt(Integer::parseInt).toArray();
		int[] decreaseIndex = new int[args.length];
		for (int i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) decreaseIndex[i] = i + 1;
		}

		int decreaseCount = (int) Arrays.stream(decreaseIndex).filter(n -> n > 0).count();
		if (decreaseCount > 1) {
			System.out.println("impossible");
		} else {
			System.out.println("possible");
		}
	}
}
