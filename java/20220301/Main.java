/*
Given three 32-bit integers x, y, and b, return x if b is 1 and y if b is 0, using only mathematical or bit operations. 
You can assume b can only be 1 or 0.
*/

class Main {
	public static void main(String[] args) {
		int x = Integer.parseInt(args[0]);
		int y = Integer.parseInt(args[1]);
		int b = Integer.parseInt(args[2]);

		System.out.println(bitwiseDeduction(x, y, b));
	}

	static int bitwiseDeduction(int x, int y, int b) {
		// bitwise AND
		boolean bothOdd = (x & y) % 2 == 1;
		if (bothOdd) {
			// x and y are both odd, so if x & b is odd, b is odd
			if ((x & b) % 2 == 1) return x;
			else return y;
		} else {
			// bitwise XOR
			boolean oneOdd = (x ^ y) % 2 == 1;
			if (oneOdd) {
				// AND with both, then OR those results. if true, b is odd
				if (((x & b) | (y & b)) % 2 == 1) return x;
				else return y;
			} else {
				// both x and y are even, so if x | b is even, b is even 
				// (is zero even? 'not odd' might be more accurate)
				if ((x | b) % 2 == 0) return y;
				else return x;
			}
		}
	}
}
