/*
Implement a radix sort algorithm.
*/

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

class Main {
	public static void main(String[] args) {
		ArrayList<Integer> nums = new ArrayList<>(Arrays.stream(args)
				.map(Integer::parseInt)
				.collect(Collectors.toList())
		);
		ArrayList<Integer> sortedNums = radixSort(nums);
		System.out.println(sortedNums);
	}

	public static ArrayList<Integer> radixSort(ArrayList<Integer> array) {
		if (array.size() == 0)
			return array;

		// initializing utility arrays
		int[] buckets = new int[10];
		Arrays.fill(buckets, 0);
		int[] sorted = new int[array.size()];

		// iterate once per digit of max element in array
		int maxDigits = (int) Math.log10(Collections.max(array));
		for (int digit = 0; digit <= maxDigits; digit++) {
			// get counts for each digit
			for (int num : array) {
				buckets[getDigit(digit, num)]++;
			}

			// cascade through counts
			for (int i = 1; i < buckets.length; i++) {
				buckets[i] += buckets[i - 1];
			}

			// iterate backwards through the array
			// insert element into correct position in sorted array
			// decrement count in buckets
			for (int i = array.size() - 1; i >= 0; i--) {
				int current = array.get(i);
				int index = --buckets[getDigit(digit, current)];
				sorted[index] = current;
			}

			// reset utility arrays
			List<Integer> sortedAsList = Arrays.stream(sorted)
					.mapToObj(n -> n)
					.collect(Collectors.toList());
			array = new ArrayList<>(sortedAsList);
			buckets = new int[10];
			Arrays.fill(buckets, 0);
			sorted = new int[array.size()];
		}
		return array;
	}

	// digits are assigned thusly:
	// 3 2 1 0
	// [1, 3, 3, 7]
	public static int getDigit(int digit, int num) {
		int factor = (int) Math.pow(10, digit);
		return (int) (num % (factor * 10)) / factor;
	}
}
