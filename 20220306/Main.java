/*
A fixed point in an array is an element whose value is equal to its index. Given a sorted array of distinct elements, 
return a fixed point, if one exists. Otherwise, return False.

For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return False.
*/

import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		int[] arr = Arrays.stream(args).mapToInt(Integer::parseInt).toArray();
		System.out.println(fixedPoint(arr));
	}

	static int fixedPoint(int[] arr) {
		for (int i = 0; i < arr.length; i++) {
			if (arr[i] == i) return i;
		}
		return -1;
	}
}
