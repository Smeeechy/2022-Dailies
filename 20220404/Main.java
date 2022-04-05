/*
Given a set of characters C and an integer k, a De Bruijn sequence is a cyclic sequence in which every possible k-length 
string of characters in C occurs exactly once.

For example, suppose C = {0, 1} and k = 3. Then our sequence should contain the substrings 
{'000', '001', '010', '011', '100', '101', '110', '111'}, and one possible solution would be 00010111.

Create an algorithm that finds a De Bruijn sequence.
*/

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;

class Main {
	public static void main(String[] args) {
		int k = Integer.parseInt(args[0]);
		String[] charPool = Arrays.stream(args).skip(1).toArray(String[]::new);

		// generate a list of all possible substrings
		String[] allSubstrings = findAllSubstrings(k, charPool).toArray(String[]::new);
		Arrays.sort(allSubstrings);
		System.out.println(Arrays.toString(allSubstrings));

		// step 2
		// ???
	}

	public static ArrayList<String> findAllSubstrings(int k, String[] charPool) {
		HashSet<String> set = findAllSubstringsRecursive("", k, charPool);
		return new ArrayList<String>(set);
	}

	private static HashSet<String> findAllSubstringsRecursive(String prev, int k, String[] charPool) {
		HashSet<String> set = new HashSet<>();
		if (prev.length() == k) {
			set.add(prev);
			return set;
		} 
		for (String s : charPool) {
			set.addAll(findAllSubstringsRecursive(prev + s, k, charPool));
		}
		return set;
	}
}
