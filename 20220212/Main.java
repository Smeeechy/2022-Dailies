/*
Mastermind is a two-player game in which the first player attempts to guess the secret code of the second. In this version, the code may be any 
six-digit number with all distinct digits.

Each turn the first player guesses some number, and the second player responds by saying how many digits in this number correctly matched their 
location in the secret code. For example, if the secret code were 123456, then a guess of 175286 would score two, since 1 and 6 were correctly placed.

Write an algorithm which, given a sequence of guesses and their scores, determines whether there exists some secret code that could have produced them.

For example, for the following scores you should return True, since they correspond to the secret code 123456:

{175286: 2, 293416: 3, 654321: 0}
However, it is impossible for any key to result in the following scores, so in this case you should return False:

{123456: 4, 345678: 4, 567890: 4}
*/

import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		String[] validNums = java.util.stream.IntStream.range(0, 1000000)
			.mapToObj(n -> String.format("%06d", n))
			.filter(n -> {
				char[] digits = ((String) n).toCharArray();
				for (int i = 0; i < digits.length; i++) {
					for (int j = i + 1; j < digits.length; j++) {
						if (digits[i] == digits[j]) return false;
					}
				}
				return true;
			}).toArray(String[]::new);
		
		String[] inputs = new String[args.length / 2];
		int[] scores = new int[args.length / 2];

		for (int i = 0; i < args.length; i += 2) {
			inputs[i / 2] = args[i];
			scores[i / 2] = Integer.parseInt(args[i + 1]);
		}

		for (int i = 0; i < inputs.length; i++) {
			String input = inputs[i];
			int score = scores[i];
			validNums = Arrays.stream(validNums)
				.filter(n -> {
					int common = 0;
					char[] inputDigits = input.toCharArray();
					char[] nDigits = n.toCharArray();
					for (int x = 0; x < nDigits.length; x++) {
						if (inputDigits[x] == nDigits[x]) common++;
					}
					if (common == score) return true;
					else return false;
				}).toArray(String[]::new);
		}

		if (validNums.length > 0) System.out.println("There are " + validNums.length + " more remaining valid numbers.");
		else System.out.println("There are no remaining valid numbers.");
	}
}
