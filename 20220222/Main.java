/*
Given a string of round, curly, and square open and closing brackets, 
return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.
*/

class Main {
	public static void main(String[] args) {
		System.out.println(isBalanced(args[0]));
	}

	static boolean isBalanced(String s) {
		System.out.println(s);
		while (true) {
			int l0 = s.length();
			s = s.replaceAll("\\{\\}", "");
			if (s.length() > 0) System.out.println(s);
			s = s.replaceAll("\\[\\]", "");
			if (s.length() > 0) System.out.println(s);
			s = s.replaceAll("\\(\\)", "");
			if (s.length() > 0) System.out.println(s);
			if (l0 == s.length()) {
				if (l0 == 0) return true;
				else return false;
			} 
		}
	}
}
