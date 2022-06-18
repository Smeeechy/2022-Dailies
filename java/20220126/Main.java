/*
A step word is formed by taking a given word, adding a letter, and anagramming the result. For example, starting with the word "APPLE", 
you can add an "A" and anagram to get "APPEAL".

Given a dictionary of words and an input word, create a function that returns all valid step words.
*/

import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

class Main {
	public static void main(String[] args) {
		ArrayList<String> dict = new ArrayList<>();
		dict.addAll(List.of("APPEAL", "BONES", "CRASH", "DEATH", "EMERGENCY", "FUTILE", "GHOUL", 
			"HARDY", "INSULT", "JOBLESS", "KNIFE", "LILY", "MARKET", "NORWAY", "ORDER", "PEANUT", 
			"QUILLS", "REEF", "STONE", "TOES", "USUAL", "VILE", 
			"WHEAT", "XYLOPHONE", "YOURS", "ZIP"));
		
		for (String arg : args) {
			System.out.println("results for " + arg + ":");
			ArrayList<String> result = findStepWords(dict, arg.toUpperCase());
			result.forEach(System.out::println);
			System.out.println();
		}
	}

	public static ArrayList<String> findStepWords(ArrayList<String> dict, String base) {
		return new ArrayList<String>(dict.stream()
			.filter(word -> word.length() == (base.length() + 1))
			.filter(word -> {
				for (String letter : sort(base).split("")) {
					if (!sort(word).contains(letter)) {
						// System.out.println(letter + " is not in " + word);
						return false;
					}
				}
				return true;
			}).collect(Collectors.toList()));
	}

	public static String sort(String input) {
		char[] temp = input.toCharArray();
		Arrays.sort(temp);
		return new String(temp);
	}
}
