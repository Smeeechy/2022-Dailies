/*
Find an efficient algorithm to find the smallest distance (measured in number of words) between any two given words in a string.

For example, given words "hello", and "world" and a text content of "dog cat hello cat dog dog hello cat world", return 1 
because there's only one word "cat" in between the two words.
*/

import java.util.ArrayList;
import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		String text = args[0];
		String[] words = Arrays.stream(args).skip(1).toArray(String[]::new);

		System.out.println(text);
		System.out.println(Arrays.toString(words));

		System.out.println(wordsBetween(text, words));
	}

	public static int wordsBetween(String text, String[] keywords) {
		String[] words = text.split(" ");
		int min = words.length;
		for (int i = 0; i < words.length; i++) {
			for (int j = i + 1; j < words.length; j++) {
				if (words[i].equals(keywords[0]) && words[j].equals(keywords[1]) && j - i - 1 < min) min = j - i - 1;
			}
		}
		return min;
	}
}
