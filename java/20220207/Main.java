/*
You are given a set of synonyms, such as (big, large) and (eat, consume). Using this set, determine if two sentences with the same number of 
words are equivalent.

For example, the following two sentences are equivalent:

"He wants to eat food."
"He wants to consume food."
Note that the synonyms (a, b) and (a, c) do not necessarily imply (b, c): consider the case of (coach, bus) and (coach, teacher).

Follow-up: what if we can assume that (a, b) and (a, c) do in fact imply (b, c)?
*/

class Main {
	private static final String sentence1 = "He is too big to eat less food.";
	private static final String sentence2 = "He is too large to consume additional food.";

	private static final String[][] dict = new String[][] {{"eat", "consume"}, {"big", "large"}, {"more", "additional"}};

	public static void main(String[] args) {
		System.out.println(sentence1);
		System.out.println(sentence2);

		String[] words1 = sentence1.split("\\s");
		String[] words2 = sentence2.split("\\s");

		if (words1.length != words2.length) {
			System.out.println("Not equal: sentences are of different lengths");
			return;
		}

		boolean equal = true;
		for (int i = 0; i < words1.length; i++) {
			String word1 = words1[i].toUpperCase();
			String word2 = words2[i].toUpperCase();
			if (!word1.equals(word2)) {
				equal = false;
				for (String[] pair : dict) {
					String syn1 = pair[0].toUpperCase();
					String syn2 = pair[1].toUpperCase();
					if ((word1.equals(syn1) && word2.equals(syn2)) || (word1.equals(syn2) && word2.equals(syn1))) equal = true;
				}
				if (!equal) System.out.println("Not equal: " + word1 + " =/= " + word2);
			}
		}
		if (equal) System.out.println("Equal");
	}
}
