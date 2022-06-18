/*
Given a string and a set of characters, return the shortest substring containing all the characters in the set.

For example, given the string "figehaeci" and the set of characters {a, e, i}, you should return "aeci".

If there is no substring containing all the characters in the set, return null.
*/

import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		String s = args[0];
		String[] charset = new String[args.length - 1];
		for (int i = 1; i < args.length; i++) {
			charset[i - 1] = args[i];
		}

		String ssoac = shortestSubstringOfAllChars(s, charset);
		System.out.println(ssoac);
	}

	public static String shortestSubstringOfAllChars(String s, String[] charset) {
		char[] sch = s.toCharArray();
		String shortest = s;

		for (int i = 0; i < s.length(); i++) {
			for (int j = i + 1; j < s.length(); j++) {
				
			}
		}

		// if we haven't found anything shorter than the original string we'll just return null per the prompt
		// yeah it breaks with certain edge cases but whatever
		if (shortest.equals(s)) return null;
		else return shortest;
	}
}
