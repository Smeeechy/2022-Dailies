/*
You have access to ranked lists of songs for various users. Each song is represented as an integer, and more preferred songs appear 
earlier in each list. For example, the list [4, 1, 7] indicates that a user likes song 4 the best, followed by songs 1 and 7.

Given a set of these ranked lists, interleave them to create a playlist that satisfies everyone's priorities.

For example, suppose your input is {[1, 7, 3], [2, 1, 6, 7, 9], [3, 9, 5]}. In this case a satisfactory playlist could be [2, 1, 6, 7, 3, 9, 5].
*/

import java.util.LinkedHashSet;
import java.util.ArrayList;
import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		ArrayList<Integer> result = new ArrayList<>();

		// parse the input into "playlists"
		ArrayList<int[]> pls = new ArrayList<>();
		Arrays.stream(args).forEach(arg -> pls.add(Arrays.stream(arg.split(",")).mapToInt(Integer::parseInt).toArray()));

		// 1, 7, 3, 5 - 2, 1, 4, 7, 6 - 4, 5, 6

		// iterate through playlists
		for (int[] pl : pls) {
			System.out.println("playlist: " + Arrays.toString(pl));
			if (result.isEmpty()) {
				for (int n : pl) result.add(n);
				continue;
			}
			// iterate through result
			for (int rsi = 0; rsi < result.size(); rsi++) {
				// iterate through playlist
				for (int pli = 0; pli < pl.length; pli++) {
					System.out.println("comparing " + result.get(rsi) + " and " + pl[pli]);
					// if a match is found, iterate playlist backwards adding all elements to the index before it in the result
					if (result.get(rsi) == pl[pli]) {
						System.out.println("match found");
						for (int previ = pli - 1; previ >= 0; previ--) {
							result.add(rsi, pl[previ]); 
						}
					} else {
						System.out.println("no match found");
						result.add(pl[pli]);
					}
				}
			}
			System.out.print("current result: ");
			result.forEach(System.out::println);
		}
		LinkedHashSet<Integer> result2 = new LinkedHashSet<Integer>(result);
		result2.forEach(System.out::println);
	}
}
