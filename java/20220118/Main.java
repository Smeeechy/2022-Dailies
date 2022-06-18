/*
In academia, the h-index is a metric used to calculate the impact of a researcher's papers. It is calculated as follows:

A researcher has index h if at least h of her N papers have h citations each. If there are multiple h satisfying this formula, the maximum is chosen.

For example, suppose N = 5, and the respective citations of each paper are [4, 3, 0, 1, 5]. Then the h-index would be 3, since the researcher has 3 
papers with at least 3 citations.

Given a list of paper citations of a researcher, calculate their h-index.
*/

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map.Entry;

class Main {
	public static void main(String[] args) {
		int[] citations = Arrays.stream(args).mapToInt(Integer::parseInt).toArray();
		HashMap<Integer, Integer> map = new HashMap<>();
		for (int i = 1; i <= citations.length; i++) {
			final int j = i;
			int h = (int) Arrays.stream(citations).filter(n -> n >= j).count();
			map.put(i, h);
		}
		int h_index = 0;
		for (Entry<Integer, Integer> entry : map.entrySet()) {
			int key = entry.getKey();
			int value = entry.getValue();
			System.out.println("citations:" + key + "\t# of papers:" + value);
			if (value >= key) h_index = key;
		}
		System.out.println("the h-index of this set of papers is " + h_index);
	}
}
