/*
You are the technical director of WSPT radio, serving listeners nationwide. For simplicity's sake we can consider each 
listener to live along a horizontal line stretching from 0 (west) to 1000 (east).

Given a list of N listeners, and a list of M radio towers, each placed at various locations along this line, determine 
what the minimum broadcast range would have to be in order for each listener's home to be covered.

For example, suppose listeners = [1, 5, 11, 20], and towers = [4, 8, 15]. In this case the minimum range would be 5, 
since that would be required for the tower at position 15 to reach the listener at position 20.
*/

import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		int[] listeners = Arrays.stream(args)
			.takeWhile(s -> s.matches("\\d+"))
			.mapToInt(Integer::parseInt)
			.toArray();
		int[] towers = Arrays.stream(args)
			.dropWhile(s -> s.matches("\\d+"))
			.filter(s -> s.matches("\\d+"))
			.mapToInt(Integer::parseInt)
			.toArray();
		int minRange = Integer.MIN_VALUE;
		for (int listener : listeners) {
			for (int tower : towers) {
				
			}
		}
	}
}
