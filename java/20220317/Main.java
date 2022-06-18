/*
Given an array of elements, return the length of the longest subarray where all its elements are distinct.

For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], return 5 as the longest subarray of distinct elements is [5, 2, 3, 4, 1].
*/

import java.util.Arrays;
import java.util.ArrayList;
import java.util.HashMap;

class Main {
	public static void main(String[] args) {
		int[] arr = Arrays.stream(args).mapToInt(Integer::parseInt).toArray();
		Integer[] best = null;
		int bestIndex = -1;
		int bestLength = 0;
		for (int i = 0; i < arr.length; i++) {
			ArrayList<Integer> subArray = new ArrayList<>();
			subArray.add(arr[i]);
			for (int j = i + 1; j < arr.length; j++) {
				if (subArray.contains(arr[j])) break;
				else subArray.add(arr[j]);
			}
			if (subArray.size() > bestLength) {
				bestIndex = i;
				bestLength = subArray.size();
				best = subArray.toArray(Integer[]::new);
			}
		}
		System.out.println(Arrays.toString(best));
	}
}
