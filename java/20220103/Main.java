/*
Given a word W and a string S, find all starting indices in S which are anagrams of W.

For example, given that W is "ab", and S is "abxaba", return 0, 3, and 4.
*/

import java.util.Arrays;
import java.util.ArrayList;

class Main {
	public static void main(String[] args) {
		ArrayList<Integer> results = findAnagrams(args[0], args[1]);
		results.forEach(System.out::print);
	}

	public static ArrayList<Integer> findAnagrams(String w, String s) {
		ArrayList<Integer> anagramIndices = new ArrayList<>();
		int i0 = 0;
		int i = w.length();
		w = sort(w);
		for (; i <= s.length(); i0++, i++) {
			// substring between current indices
			String sub = sort(s.substring(i0, i));
			// compare sorted strings
			if (w.equals(sub)) anagramIndices.add(i0);
		}
		return anagramIndices;
	}

	public static String sort(String input) {
		char[] temp = input.toCharArray();
		Arrays.sort(temp);
		return new String(temp);
	}
}
