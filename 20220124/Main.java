/*
Write a program that checks whether an integer is a palindrome. For example, 121 is a palindrome, as well as 888. 678 is not a palindrome. 
Do not convert the integer into a string.
*/

import java.util.ArrayList;

class Main {
	public static void main(String[] args) {
		int n = Integer.parseInt(args[0]);
		ArrayList<Integer> n_rev_list = new ArrayList<>();
		for (int i = 0; ; i++) {
			int divisor = (int) Math.pow(10, i);
			if ((n / divisor) == 0) break;
			// System.out.println("divisor=" + divisor);
			int digit = (n / divisor) % 10;
			// System.out.println("digit=" + digit);
			n_rev_list.add(digit);
		}
		// n_rev_list.forEach(x -> System.out.print(x + " "));

		int n_rev = 0;
		for (int i = 0; i < n_rev_list.size(); i++) {
			n_rev += n_rev_list.get(i) * Math.pow(10, n_rev_list.size() - i - 1);
		}

		if (n == n_rev) System.out.println("palindrome");
		else System.out.println("not a palindrome");
	}
}
