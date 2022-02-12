/*
You are given n numbers as well as n probabilities that sum up to 1. Write a function to generate one of the numbers with its corresponding 
probability.

For example, given the numbers [1, 2, 3, 4] and probabilities [0.1, 0.5, 0.2, 0.2], your function should return 1 10% of the time, 2 50% of 
the time, and 3 and 4 20% of the time.

You can generate random numbers between 0 and 1 uniformly.
*/

import java.util.Arrays;
import java.util.Random;

class Main {
	private static final Random random = new Random();

	public static void main(String[] args) {
		int trials = 1000000;

		Integer[] nums = Arrays.stream(args).filter(n -> !n.contains(".")).map(n -> Integer.parseInt(n)).toArray(Integer[]::new);
		double[] probs = Arrays.stream(args).filter(n -> n.contains(".")).mapToDouble(Double::parseDouble).toArray();
		int[] counts = new int[nums.length];

		for (int i = 0; i < trials; i++) {
			counts[Arrays.asList(nums).indexOf(weightedRandom(nums, probs))]++;
		}

		System.out.println(java.text.NumberFormat.getIntegerInstance().format(trials) + " trials resulted in the following probabilities:");
		for (int i = 0; i < counts.length; i++) {
			System.out.println(nums[i] + "\t- " + format(100.0 * (counts[i] / (double) trials)) + "%");
		}
	}

	public static Integer weightedRandom(Integer[] nums, double[] probs) {
		if (nums.length != probs.length) return -1;
		if (Math.round(Arrays.stream(probs).sum()) != 1.0) return -1;
		
		double totalProb = 0.0;
		double rand = random.nextDouble();
		for (int i = 0; i < nums.length; i++) {
			totalProb += probs[i];
			if (rand <= totalProb) return nums[i];
		}

		return -1;
	}

	public static String format(double d) {
		return String.format("%.2f", d);
	}
}
