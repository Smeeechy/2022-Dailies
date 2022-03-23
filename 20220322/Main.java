/*
Create a basic sentence checker that takes in a stream of characters and determines whether they form valid sentences. 
If a sentence is valid, the program should print it out.

We can consider a sentence valid if it conforms to the following rules:

The sentence must start with a capital letter, followed by a lowercase letter or a space.
All other characters must be lowercase letters, separators (,,;,:) or terminal marks (.,?,!,‽).
There must be a single space between each word.
The sentence must end with a terminal mark immediately following a word.
*/

import java.util.regex.Pattern;
import java.util.regex.Matcher;

class Main {
	public static void main(String[] args) {
		String s = args[0];
		Pattern pattern = Pattern.compile("^[A-Z][a-z ]([a-z,;:]+( ))*[a-z]+[.!?]$");
		Matcher matcher = pattern.matcher(s);
		System.out.println(matcher.find());
	}
}
