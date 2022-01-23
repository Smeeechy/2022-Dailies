/*
Given an integer n, find the next biggest integer with the same number of 1-bits on. For example, given the number 6 (0110 in binary), return 9 (1001).
*/

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

		// print the result
		System.out.println(n);
	}

	// returns the count of 1-bits for the given number
	public static int countOneBits(int n) {
		int result = 0;
		for (int i = 0; (n >> i) > 0; i++) {
			if ((n >> i) % 2 == 1) result++;
		}
		return result;
	}
}
