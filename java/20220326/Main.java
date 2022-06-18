/*
Given integers M and N, write a program that counts how many positive integer pairs (a, b) satisfy the following conditions:

a + b = M
a XOR b = N
*/

import java.util.Arrays;
import java.util.ArrayList;

class Main {
	public static void main(String[] args) {
		int m = Integer.parseInt(args[0]);
		int n = Integer.parseInt(args[1]);

		ArrayList<Integer[]> result = findPositivePairs(m, n);
		result.forEach(arr -> System.out.println(Arrays.toString(arr)));
	}

	public static ArrayList<Integer[]> findPositivePairs(int m, int n) {
		ArrayList<Integer[]> pairs = new ArrayList<>();
		for (int i = 0; i <= m / 2; i++) {
			for (int j = i; j < m; j++) {
				if ((i + j) == m || (i ^ j) == n) pairs.add(new Integer[] { i, j });
			}
		}
		return pairs;
	}
}
