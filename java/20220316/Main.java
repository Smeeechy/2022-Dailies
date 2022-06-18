/*
Given a string s and a list of words words, where each word is the same length, find all starting indices of substrings 
in s that is a concatenation of every word in words exactly once.

For example, given s = "dogcatcatcodecatdog" and words = ["cat", "dog"], return [0, 13], since "dogcat" starts at index 0 
and "catdog" starts at index 13.

Given s = "barfoobazbitbyte" and words = ["dog", "cat"], return [] since there are no substrings composed of "dog" and 
"cat" in s.

The order of the indices does not matter.
*/

import java.util.Arrays;
import java.util.ArrayList;

class Main {
	public static void main(String[] args) {
		String s = args[args.length - 1];
		String[] words = new String[args.length - 1];
		for (int i = 0; i < words.length; i++) {
			words[i] = args[i];
		}
		System.out.println(s);
		System.out.println(Arrays.toString(words));
	}

	public static int[] findConcats(String[] words, String s) {
		char[] chars = s.toCharArray();
		for (int i = 0; i < chars.length; i++) {
			
		}
		return new int[1];
	}

	public static String[] possibleCombos(String[] words) {
		ArrayList<String> result = new ArrayList<>();
		for (int i = 0; i < words.length; i++) {
			StringBuilder builder = new StringBuilder();
			for (int j = 0; j < words.length; j++) {
				if (i == j) continue;
				
			}
		}
		return result.toArray(String[]::new);
	}
}
