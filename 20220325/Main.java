/*
You are given a string formed by concatenating several words corresponding to the integers zero through nine and then 
anagramming.

For example, the input could be 'niesevehrtfeev', which is an anagram of 'threefiveseven'. Note that there can be multiple 
instances of each integer.

Given this string, return the original integers in sorted order. In the example above, this would be 357.
*/

import java.util.Arrays;
import java.util.ArrayList;

class Main {
	public static void main(String[] args) {
		String result = decipherParseAndSort(args[0].toLowerCase());
		System.out.println(result);
	}

	public static String decipherParseAndSort(String s) {
		ArrayList<String> deciphered = new ArrayList<>();
		String[] nums = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
		while (s.length() > 0) {
			for (String num : nums) {
				Character[] chars = wrap(num.toCharArray());
				String newS = removeFromString(s, chars);
				if (newS != null) {
					s = newS;
					deciphered.add(num);
					break;
				}
			}
		}
		StringBuilder builder = new StringBuilder();
		deciphered.forEach(n -> builder.append(toDigit(n)));
		return builder.toString();
	}

	public static String removeFromString(String s, Character[] chars) {
		// for each char in chars, remove the first occurence encountered in s
		// return the resulting string if one of every char is succesfully removed, otherwise null
		ArrayList<Character> sChars = new ArrayList<Character>(Arrays.asList(wrap(s.toCharArray())));
		for (Character ch : chars) {
			sChars.remove(ch);
		}
		if (sChars.size() == (s.length() - chars.length)) return String.valueOf(unwrap(sChars.toArray(Character[]::new)));
		else return null;
	}

	public static Character[] wrap(char[] primitives) {
		Character[] wrapped = new Character[primitives.length];
		for (int i = 0; i < primitives.length; i++) {
			wrapped[i] = Character.valueOf(primitives[i]);
		}
		return wrapped;
	}

	public static char[] unwrap(Character[] wrapped) {
		char[] unwrapped = new char[wrapped.length];
		for (int i = 0; i < wrapped.length; i++) {
			unwrapped[i] = (char) wrapped[i];
		}
		return unwrapped;
	}

	public static String toDigit(String num) {
		switch (num) {
			case "zero":
				return "0";
			case "one":
				return "1";
			case "two":
				return "2";
			case "three":
				return "3";
			case "four":
				return "4";
			case "five":
				return "5";
			case "six":
				return "6";
			case "seven":
				return "7";
			case "eight":
				return "8";
			case "nine":
				return "9";
		}
		return null;
	}
}
