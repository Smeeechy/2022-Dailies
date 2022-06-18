/*
Given a list of integers, square the elements and give the output in sorted order.
*/

import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		int[] input = Arrays.stream(args)
			.mapToInt(Integer::parseInt)
			.map(n -> n * n)
			.sorted()
			.toArray();
		System.out.println(Arrays.toString(input));
	}
}
