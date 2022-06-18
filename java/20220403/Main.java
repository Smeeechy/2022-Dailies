/*
A Collatz sequence in mathematics can be defined as follows. Starting with any positive integer:

if n is even, the next number in the sequence is n / 2
if n is odd, the next number in the sequence is 3n + 1
It is conjectured that every such sequence eventually reaches the number 1. Test this conjecture.

Bonus: What input n <= 1000000 gives the longest sequence?
*/

import java.util.ArrayList;
import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		int num = Integer.parseInt(args[0]);
		int maxNum = -1;
		int maxLen = 0;
		while (num > 0) {
			int len = collatz(num--);
			if (len > maxLen) {
				maxNum = num;
				maxLen = len;
			}
			System.out.println("\n====================");
		}

		System.out.println("Max length number is " + maxNum + " at " + maxLen + " numbers long");
	}

	public static int collatz(int num) {
		int count = 1;
		while (num > 1) {
			System.out.print(num + " ");
			if (num % 2 == 0) num /= 2;
			else num = num * 3 + 1;
			count++;
		}
		return count;
	}
}
