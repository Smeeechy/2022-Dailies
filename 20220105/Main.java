/*
Alice wants to join her school's Probability Student Club. 
Membership dues are computed via one of two simple probabilistic games.

The first game: roll a die repeatedly. Stop rolling once you get 
a five followed by a six. Your number of rolls is the amount you pay, in dollars.

The second game: same, except that the stopping condition is 
a five followed by a five.

Which of the two games should Alice elect to play? Does it even matter? 
Write a program to simulate the two games and calculate their expected value.
*/

import java.util.Random;

class Main {
	private static final Random die = new Random();
	private static int rolls;

	public static void main(String[] args) {
		int iterations = Integer.parseInt(args[0]);
		int[] totals = new int[2];
		for (int i = 0; i < iterations; i++) {
			int[] results = simulate();
			totals[0] += results[0];
			totals[1] += results[1];
		}
		System.out.println("Game 1: " + ((float) totals[0] / (float) iterations));
		System.out.println("Game 2: " + ((float) totals[1] / (float) iterations));
	}

	public static int[] simulate() {
		int[] results = new int[2];
		int num;

		rolls = 0;
		while (true) {
			num = roll();
			if (num == 5) {
				num = roll();
				if (num == 6) break;
			}
		}
		results[0] = rolls;		

		rolls = 0;
		while (true) {
			num = roll();
			if (num == 5) {
				num = roll();
				if (num == 5) break;
			}
		}
		results[1] = rolls;
		return results;
	}

	public static int roll() {
		rolls++;
		return die.nextInt(6) + 1;
	}
}
