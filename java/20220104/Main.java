/*
Given an array of numbers of length N, find both the minimum and maximum using 
less than 2 * (N - 2) comparisons.
*/

import java.util.ArrayList;
import java.util.Random;

class Main {
	public static void main(String[] args) {
		Random prng = new Random();
		ArrayList<Integer> list = new ArrayList<>();
		for (int i = 0; i < Integer.parseInt(args[0]); i++) {
			list.add(prng.nextInt(100));
		}
		list.forEach(System.out::println);
		int comparisons = 0;
		int min = Integer.MAX_VALUE;
		int max = Integer.MIN_VALUE;
		for (int n : list) {
			comparisons++;
			if (n < min) {
				min = n;
				continue;
			}
			comparisons++;
			if (n > max) {
				max = n;
			}
		}
		System.out.println("min: " + min);
		System.out.println("max: " + max);
		System.out.println("comparison limit: " + (2 * (Integer.parseInt(args[0]) - 2)));
		System.out.println("# of comparisons: " + comparisons);
	}
}
