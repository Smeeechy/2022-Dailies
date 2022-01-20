/*
Given an array of numbers, find the length of the longest increasing subsequence in the array. The subsequence does not necessarily have to be contiguous.

For example, given the array [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15], the longest increasing subsequence has length 6: 0, 2, 6, 9, 11, 15.
*/

import java.util.Arrays;
import java.util.ArrayList;

class Main {
	static int[] nums, sorted;
	static ArrayList<Integer> longest = new ArrayList<>();

	public static void main(String[] args) {
		// parsing input into usable data
		nums = Arrays.stream(args).mapToInt(Integer::parseInt).toArray();
		sorted = nums.clone();
		Arrays.sort(sorted);
		for (int n : nums) {
			ArrayList<Integer> list = new ArrayList<>();
			list.add(n);
			for (int skip = 0; skip < nums.length; skip++) search(list, skip);
		}
		longest.forEach(n -> System.out.print(n + " "));
	}

	public static void search(ArrayList<Integer> given, int skip) {
		int last = given.get(given.size() - 1);
		// break out if we hit the max element
		if (last == sorted[sorted.length - 1]) return;
		int[] valid = Arrays.stream(nums).dropWhile(n -> n != last).filter(n -> n > last).toArray();
		// break out if there are no more valid options to add
		if (valid.length == 0 || skip >= valid.length) return;
		ArrayList<Integer> newList = (ArrayList<Integer>) given.clone();
		newList.add(valid[skip]);
		if (newList.size() > longest.size()) longest = newList;
		for (int newSkip = 0; newSkip < nums.length; newSkip++) {
			search(newList, newSkip);
		}
	}
}
