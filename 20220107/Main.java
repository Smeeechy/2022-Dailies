/*
Determine whether there exists a one-to-one character mapping from one string s1 to another s2.

For example, given s1 = abc and s2 = bcd, return true since we can map a to b, b to c, and c to d.

Given s1 = foo and s2 = bar, return false since the o cannot map to two characters.
*/

import java.util.HashMap;

class Main {
	public static void main(String[] args) {
		System.out.println(args[0] + " is " + 
			(isMappable(args[0], args[1]) ? "" : "not ") + 
			"mappable to " + args[1] + ".");
	}

	private static boolean isMappable(String s1, String s2) {
		if (s1.length() != s2.length()) return false;
		HashMap<Character, Character> map = new HashMap<>();
		for (int i = 0; i < s1.length(); i++) {
			Character test = map.putIfAbsent(s1.charAt(i), s2.charAt(i));
			if (test != null && test != s2.charAt(i)) return false;
		}
		return true;
	}
}
