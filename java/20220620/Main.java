/*
Implement an insertion sort algorithm.
*/

import java.util.ArrayList;
import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		int[] nums = Arrays.stream(args).mapToInt(n -> Integer.parseInt(n)).toArray();
		System.out.println("Before: " + Arrays.toString(nums));
		int[] sorted = insertionSort(nums);
		System.out.println("After: " + Arrays.toString(sorted));
	}

	public static int[] insertionSort(int[] array) {
		for (int i = 0; i < array.length; i++) {
			for (int j = i - 1; j >= 0; j--) {
				if (array[j] > array[j + 1]) swap(array, j, j + 1);
				else break;
			}
		}
		return array;
	}
	
	public static void swap(int[] array, int i, int j) {
		int temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}