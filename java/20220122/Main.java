/*
Implement integer exponentiation. That is, implement the pow(x, y) function, where x and y are integers and returns x^y.

Do this faster than the naive method of repeated multiplication.

For example, pow(2, 10) should return 1024.
*/

class Main {
	public static void main(String[] args) {
		int base = Integer.parseInt(args[0]);
		int exp = Integer.parseInt(args[1]);

		long naiveStart = System.nanoTime();
		long naiveResult = naivePow(base, exp);
		long naiveEnd = System.nanoTime();
		long naiveDuration = naiveEnd - naiveStart;
		System.out.println("naive result =\t" + naiveResult);
		System.out.println("naive clock =\t" + naiveDuration + " ns");		

		long fastStart = System.nanoTime();
		long fastResult = fastPow(base, exp);
		long fastEnd = System.nanoTime();
		long fastDuration = fastEnd - fastStart;
		System.out.println("fast result =\t" + fastResult);
		System.out.println("fast clock =\t" + fastDuration + " ns");

		double factor = (double) naiveDuration / fastDuration;
		System.out.println("fast method is " + String.format("%.2f", factor) + "x faster");
	}

	public static long naivePow(int base, int exp) {
		if (exp == 0) return 1;
		long result = 1;
		for (int i = 0; i < exp; i++) {
			result *= base;
		}
		return result;
	}

	public static long fastPow(int base, int exp) {
		if (exp < 0) return fastPow(1 / base, -exp);
		if (exp == 0) return 1;
		if (exp == 1) return base;
		if (exp % 2 == 0) return fastPow(base * base, exp / 2);
		else return base * fastPow(base * base, (exp - 1) / 2);
	}
}
