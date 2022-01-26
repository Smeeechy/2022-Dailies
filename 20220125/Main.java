/*
Given a number represented by a list of digits, find the next greater permutation of a number, in terms of lexicographic ordering. 
If there is not greater permutation possible, return the permutation with the lowest value/ordering.

For example, the list [1,2,3] should return [1,3,2]. The list [1,3,2] should return [2,1,3]. The list [3,2,1] should return [1,2,3].

Can you perform the operation without allocating extra memory (disregarding the input memory)?
*/

// hell no

import java.util.Arrays;

class Main {
	private static int[] arr;

	public static void main(String[] args) {
		arr = Arrays.stream(args).mapToInt(Integer::parseInt).toArray();
		int num = join();
		int next = Integer.MAX_VALUE;
		int min = Integer.MAX_VALUE;
		for (int i0 = arr.length - 2; i0 >= 0; i0--) {
			for (int i = i0 + 1; i < arr.length; i++) {
				if (join() > num && join() < next) {
					next = join();
				}
				if (join() < min) {
					min = join();
				}
				flip(i0, i);
			}
		}
		if (next == Integer.MAX_VALUE) System.out.println(min);
		else System.out.println(next);
	}

	public static int join() {
		int total = 0;
		int exp = arr.length - 1;
		for (int n : arr) {
			total += Math.pow(10, exp--) * n;
		}
		return total;
	}

	public static void flip(int i, int j) {
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	public static void print() {
		System.out.println(Arrays.toString(arr));
	}
}
