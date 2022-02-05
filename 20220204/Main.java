/*
Assume you have access to a function toss_biased() which returns 0 or 1 with a probability that's not 50-50 (but also not 0-100 or 100-0). 
You do not know the bias of the coin.

Write a function to simulate an unbiased coin toss.
*/

import java.util.function.IntSupplier;
import java.util.Random;

class Main {
	private static final Random random = new Random();
	private static final int bias = random.nextInt(100) + 1;

	private static IntSupplier tossBiased = () -> {
		int toss = random.nextInt(100) + 1;
		if (toss >= bias) return 1;
		else return 0;
	};

	private static IntSupplier tossUnbiased = () -> {
		int first, second;
		while (true) {
			first = tossBiased.getAsInt();
			second = tossBiased.getAsInt();
			if (first == second) continue;
			else if (first == 1) return 1;
			else return 0;
		}
	};

	public static void main(String[] args) {
		System.out.println("bias=" + bias);
		System.out.println("running biased trials:");
		estimateBias(tossBiased);
		System.out.println("running unbiased trials:");
		estimateBias(tossUnbiased);
	}

	private static void estimateBias(IntSupplier func) {
		int[] trials = new int[]{10, 100, 1000, 10000, 100000, 1000000};
		for (int trial : trials) {
			int total = 0;
			for (int i = 0; i < trial; i++) {
				total += func.getAsInt();
			}
			System.out.println(trial + " roll estimated bias=" + (100 - (100f * (float) total/trial)));
		}
	}
}
