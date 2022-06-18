/*
On a mysterious island there are creatures known as Quxes which come in three colors: red, green, and blue. One power of the 
Qux is that if two of them are standing next to each other, they can transform into a single creature of the third color.

Given N Quxes standing in a line, determine the smallest number of them remaining after any possible sequence of such 
transformations.

For example, given the input ['R', 'G', 'B', 'G', 'B'], it is possible to end up with a single Qux through the following steps:

        Arrangement       |   Change
----------------------------------------
['R', 'G', 'B', 'G', 'B'] | (R, G) -> B
['B', 'B', 'G', 'B']      | (B, G) -> R
['B', 'R', 'B']           | (R, B) -> G
['B', 'G']                | (B, G) -> R
['R']                     |
*/

import java.util.Arrays;
import java.util.ArrayList;

class Main {
	public static void main(String[] args) {
		// standardize the inputs
		String[] quxes = Arrays.stream(args).map(s -> s.toUpperCase()).toArray(String[]::new);

		// all changes should be finished after the same number of iterations as the length of the original input list
		for (int iteration = 0; iteration < args.length; iteration++) {
			// print out the current list, stop evaluating if down to last qux
			System.out.println(Arrays.toString(quxes));
			if (quxes.length == 1) break;

			// don't know # of combinations beforehand so result must be an arraylist rather than an array
			ArrayList<String> newQuxes = new ArrayList<>();

			// iterate through all quxes and combine where possible
			for (int i = 0; i < quxes.length; i++) {
				int j;
				if (i == quxes.length - 1) j = i;  // added to evaluate last qux and also not throw exception
				else j = i + 1;

				// post incrementing i here because we want to skip j as it shouldn't exist anymore
				if (!quxes[i].equals(quxes[j])) newQuxes.add(combine(quxes[i++], quxes[j]));
				else newQuxes.add(quxes[i]);
			}

			// prepare array for next iteration
			quxes = newQuxes.toArray(String[]::new);
		}
	}

	// functional but inelegant and unscalable
	static String combine(String first, String second) {
		if (first.equals("R") && second.equals("G")) return "B";
		if (first.equals("R") && second.equals("B")) return "G";
		if (first.equals("G") && second.equals("R")) return "B";
		if (first.equals("G") && second.equals("B")) return "R";
		if (first.equals("B") && second.equals("R")) return "G";
		if (first.equals("B") && second.equals("G")) return "R";
		return "borke";
	}
}
