/*
Given an integer k and a string s, find the length of the longest substring 
that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k 
distinct characters is "bcb".
*/

import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		String s = args[0];
		int k = Integer.parseInt(args[1]);
		String result = findDistinctSubstring(s, k);
		System.out.println(result + " (" + result.length() + ")");
	}

	public static String findDistinctSubstring(String s, int k) {
		String best = "";
		for (int i = 0; i < s.length(); i++) {
			for (int j = i; j < s.length(); j++) {
				String substring = s.substring(i, j + 1);
				int[] substringArray = substring.chars().toArray();
				int distinct = (int) Arrays.stream(substringArray).distinct().count();
				if (distinct <= k && substring.length() > best.length()) best = substring;
			}
		}
		return best;
	}
}
