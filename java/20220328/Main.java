/*
Given a string and a pattern, find the starting indices of all occurrences of the pattern in the string. 
For example, given the string "abracadabra" and the pattern "abr", you should return [0, 7].
*/

import java.util.Arrays;
import java.util.ArrayList;

class Main {
	public static void main(String[] args) {
		String s = args[0];
		String pattern = args[1];

		Integer[] indices = findPattern(s, pattern);
		System.out.println(Arrays.toString(indices));
	}

	public static Integer[] findPattern(String s, String pattern) {
		ArrayList<Integer> indices = new ArrayList<>();
		for (int i = 0; i < s.length(); i++) {
			if (s.substring(i).startsWith(pattern)) indices.add(i);
		}
		return indices.toArray(Integer[]::new);
	}
}
