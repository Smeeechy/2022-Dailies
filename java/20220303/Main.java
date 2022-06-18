/*
The Sieve of Eratosthenes is an algorithm used to generate all prime numbers smaller than N. The method is to take 
increasingly larger prime numbers, and mark their multiples as composite.

For example, to find all primes less than 100, we would first mark [4, 6, 8, ...] (multiples of two), then [6, 9, 12, ...] 
(multiples of three), and so on. Once we have done this for all primes less than N, the unmarked numbers that remain will 
be prime.

Implement this algorithm.

Bonus: Create a generator that produces primes indefinitely (that is, without taking N as an input).
*/

import java.util.Arrays;
import java.util.HashMap;
import java.util.stream.IntStream;

class Main {
	public static void main(String[] args) {
		Integer[] primes = sieveNaive(Integer.parseInt(args[0]));
		System.out.println(Arrays.toString(primes));
	}

	public static Integer[] sieveNaive(int limit) {
		HashMap<Integer, Boolean> nums = new HashMap<>();
		IntStream.rangeClosed(2, limit).forEach(n -> nums.put(n, true));
		for (int i = 2; i <= limit; i++) {
			for (int j = i * 2; j <= limit; j += i) {
				nums.replace(j, false);
			}
		}
		for (int i = 2; i <= limit; i++) {
			if (!nums.get(i)) nums.remove(i);
		}
		return nums.keySet().toArray(Integer[]::new);
	}
}
