/*
Given a array of numbers representing the stock prices of a company in chronological order, write a function that calculates 
the maximum profit you could have made from buying and selling that stock once. You must buy before you can sell it.

For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could buy the stock at 5 dollars and sell it at 10 
dollars.
*/

import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		int[] prices = Arrays.stream(args).mapToInt(Integer::parseInt).toArray();
		System.out.println(stonk(prices));
	}

	static int stonk(int[] prices) {
		int[] best = new int[2];
		best[0] = 0;
		best[1] = 1;
		for (int i = 0; i < prices.length; i++) {
			for (int j = i + 1; j < prices.length; j++) {
				int profit = prices[best[1]] - prices[best[0]];
				if (prices[j] - prices[i] > profit) {
					best[0] = i;
					best[1] = j;
				}
			}
		}
		return prices[best[1]] - prices[best[0]];
	}
}
