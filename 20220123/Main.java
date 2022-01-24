/*
Given an integer n, find the next biggest integer with the same number of 1-bits on. For example, given the number 6 (0110 in binary), return 9 (1001).
*/

import java.lang.StringBuilder;

class Main {
	public static void main(String[] args) {
		// parse input and establish end condition
		int n = Integer.parseInt(args[0]);
		int oneBits = countOneBits(n);
		
		// find the next highest int with the same 1-bit count
		while (true) {
			n++;
			if (countOneBits(n) == oneBits) break;
		}
	}

	// returns the count of 1-bits for the given number
	// also prints out each number and its binary equivalent as it iterates
	public static int countOneBits(int n) {
		int result = 0;
		StringBuilder builder = new StringBuilder();
		for (int i = 0; (n >> i) > 0; i++) {
			builder.append((n >> i) % 2);
			if ((n >> i) % 2 == 1) result++;
		}
		if (n < 2) builder.append(0);
		if (n < 4) builder.append(0);
		if (n < 8) builder.append(0);
		System.out.println(n + "=" + builder.reverse().toString());
		return result;
	}
}
