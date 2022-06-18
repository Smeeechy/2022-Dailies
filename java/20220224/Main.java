/*
Given a list of words, return the shortest unique prefix of each word. 

For example, given the list:
dog, cat, apple, apricot, fish

Return the list:
d, c, app, apr, f
*/

// horribly inefficient, but it gets the job done

class Main {
	public static void main(String[] args) {

		// for each word,
		for (int i = 0; i < args.length; i++) {
			String currentWord = args[i];

			// get the smallest possible prefix,
			for (int j = 1; j <= currentWord.length(); j++) {
				boolean valid = true;
				String prefix = currentWord.substring(0, j);
				
				// and compare it against all other words
				for (int k = 0; k < args.length; k++) {
					if (k == i) continue;
					if (args[k].startsWith(prefix)) {
						valid = false;
						break;
					}
				}

				// break out if a valid prefix is found, otherwise try again with next longest minimum prefix
				if (valid) {
					System.out.println(prefix);
					break;
				}
			}
		}
	}
}
