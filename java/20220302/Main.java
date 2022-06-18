/*
Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. 
If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should 
return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either 
['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].
*/

import java.util.Arrays;
import java.util.ArrayList;

class Main {
	public static void main(String[] args) {
		String[] words = new String[args.length - 1];
		for (int i = 0; i < args.length - 1; i++) {
			words[i] = args[i];
		}
		String sentence = args[args.length - 1];

		System.out.println(Arrays.toString(sentenceAsList(words, sentence)));
	}

	static String[] sentenceAsList(String[] words, String sentence) {
		ArrayList<String> result = new ArrayList<>();
		while (sentence.length() > 0) {
			String nextWord = null;
			for (String word : words) {
				if (sentence.startsWith(word)) nextWord = word;
			}
			if (nextWord == null) {
				System.out.println("no valid list of words found");
				return null;
			} else {
				result.add(nextWord);
				sentence = sentence.substring(nextWord.length());
			}
		}
		if (!result.isEmpty()) return result.toArray(String[]::new);
		else return null;
	}
}
