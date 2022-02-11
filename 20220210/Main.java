/*
Let's define a "sevenish" number to be one which is either a power of 7, or the sum of unique powers of 7. The first few sevenish numbers 
are 1, 7, 8, 49, and so on. Create an algorithm to find the nth sevenish number.
*/

import java.util.Arrays;
import java.util.stream.IntStream;

class Main {
	public static void main(String[] args) {
		System.out.println(nthSevenish(Integer.parseInt(args[0])));
	}

	public static int nthSevenish(int n) {
		int[] pows = IntStream.range(0, n).map(i -> (int) Math.pow(7, i)).toArray();
		int[] sevs = new int[n * n];
		int index = 0;
		for (int i = 0; i < n; i++) {
			sevs[index++] = pows[i];
			for (int j = i + 1; j < n; j++) {
				sevs[index++] = pows[i] + pows[j];
			}
		}
		sevs = Arrays.stream(sevs).filter(i -> i > 0).sorted().toArray();
		return sevs[n - 1];
	}
}
