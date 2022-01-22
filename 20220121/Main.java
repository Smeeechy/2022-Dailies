/*
Given a list of integers, return the largest product that can be made by multiplying any three integers.

For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.

You can assume the list has at least three integers.
*/

import java.util.Arrays;
import java.util.ArrayList;
import java.util.Collections;
import java.util.stream.Collectors;

class Main {
	public static void main(String[] args) {
		int product = 0;
		ArrayList<Integer> pos = new ArrayList<>(Arrays.stream(args)
			.map(arg -> Integer.parseInt(arg))
			.filter(n -> n >= 0)
			.sorted()
			.collect(Collectors.toList()));
		ArrayList<Integer> neg = new ArrayList<>(Arrays.stream(args)
			.map(arg -> Integer.parseInt(arg))
			.filter(n -> n < 0)
			.sorted()
			.collect(Collectors.toList()));
		if (neg.size() > 1) {
			if ((neg.size() > pos.size()) || neg.get(0) * -1 >= pos.get(pos.size() - 1) && neg.get(1) * -1 >= pos.get(pos.size() - 2)) product = neg.get(0) * neg.get(1) * pos.get(pos.size() - 1);
		} else {
			product = pos.get(pos.size() - 1) * pos.get(pos.size() - 2) * pos.get(pos.size() - 3);
		}
		System.out.println(product);
	}
}
