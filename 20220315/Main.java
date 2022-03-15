/*
Given a list of numbers, create an algorithm that arranges them in order to form the largest possible integer. 
For example, given [10, 7, 76, 415], you should return 77641510.
*/

import java.util.Arrays;
import java.util.ArrayList;

class Main {
	public static void main(String[] args) {
		Integer[] nums = Arrays.stream(args).map(s -> Integer.parseInt(s)).toArray(Integer[]::new);
		System.out.println(Arrays.toString(nums));
		System.out.println(beegNumber(nums));
	}

	public static int beegNumber(Integer[] nums) {
		StringBuilder builder = new StringBuilder();
		ArrayList<Integer> pool = new ArrayList<>();
		pool.addAll(Arrays.asList(nums));
		while (!pool.isEmpty()) {
			int max = pool.get(0);
			int maxDigits = (int) Math.log10(max);

			// iterate through pool to find max: next largest number with least digits
			for (int num : pool) {
				int numDigits = (int) Math.log10(num);
				if (numDigits <= maxDigits) {
					for (int i = numDigits; i >= 0; i--) {
						int maxSigDig = (max / (int) Math.pow(10, i)) % 10;
						int numSigDig = (num / (int) Math.pow(10, i)) % 10;
						if (numSigDig > maxSigDig) max = num;
					}
				}
			}
			
			// remove max from pool and append to result
			builder.append(max);
			pool.remove(new Integer(max));

			// repeat until all numbers have been used
		}
		return Integer.parseInt(builder.toString());
	}
}
