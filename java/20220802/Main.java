/*
 * Given a string, find the longest palindromic substring within it.
 */

class Main {
	public static void main(String[] args) {
		System.out.println(longestPalindromicSubstring(args[0]));
	}

  public static String longestPalindromicSubstring(String str) {
    String best = "";
    for (int index = 0; index < str.length(); index++) {
      // check from current index
      String currentOdd = expand(str, index - 1, index + 1);
      if (currentOdd.length() > best.length()) best = currentOdd;
      
      // check from between current and next index
      String currentEven = expand(str, index, index + 1);
      if (currentEven.length() > best.length()) best = currentEven;
    }
    
    return best;
  }

  public static String expand(String str, int left, int right) {
    String current = "";
    
    // add the character between left and right indices if it exists
    if (right - left == 2) current += str.charAt(right - 1);

    // expand outwards until left and right characters do not match
    while (left >= 0 && right < str.length()) {
      if (str.charAt(left) == str.charAt(right)) {
        current = str.charAt(left--) + current + str.charAt(right++);
      } else break;
    }
    
    return current;
  }
}
