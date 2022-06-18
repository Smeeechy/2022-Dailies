;/*
Given an even number (greater than 2), return two prime numbers whose sum will be equal to the given number.

A solution will always exist. See Goldbach’s conjecture.

Example:

Input: 4
Output: 2 + 2 = 4
If there are more than one solution possible, return the lexicographically smaller solution.

If [a, b] is one solution with a <= b, and [c, d] is another solution with c <= d, then

[a, b] < [c, d]
If a < c OR a==c AND b < d.
*/

import java.util.ArrayList;
import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		int n = Integer.parseInt(args[0]);
		if (n % 2 == 1) {
			System.out.println("please enter an even number");
			return;
		}
		ArrayList<Integer> primes = primes(n);
		if (primes.contains(n)) {
			System.out.println(n + " is already prime");
			return;
		}
		for (int i = 0; i < primes.size(); i++) {
			for (int j = primes.size() - 1; j >= i; j--) {
				if (primes.get(i) + primes.get(j) == n) {
					System.out.println(primes.get(i) + " + " + primes.get(j) + " = " + n);
					return;
				}
			}
		} 
	}

	// uses sieve of eratosthenes to create list of primes up to given maximum
	private static ArrayList<Integer> primes(int max) {
		boolean[] prime = new boolean[max + 1];
		Arrays.fill(prime, true);
		for (int i = 2; i <= (int) Math.sqrt(max); i++) {
			if (prime[i]) {
				for (int j = i * 2; j <= max; j += i) {
					prime[j] = false;
				} 
			}
		}
		ArrayList<Integer> result = new ArrayList<>();
		for (int i = 2; i <= max; i++) {
			if (prime[i]) result.add(i);
		}
		return result;
	}
}
