/*
UTF-8 is a character encoding that maps each symbol to one, two, three, or four bytes.

For example, the Euro sign, €, corresponds to the three bytes 11100010 10000010 10101100. The rules for mapping characters are as follows:

For a single-byte character, the first bit must be zero.
For an n-byte character, the first byte starts with n ones and a zero. The other n - 1 bytes all start with 10.
Visually, this can be represented as follows.

 Bytes   |           Byte format
-----------------------------------------------
   1     | 0xxxxxxx
   2     | 110xxxxx 10xxxxxx
   3     | 1110xxxx 10xxxxxx 10xxxxxx
   4     | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx

Write a program that takes in an array of integers representing byte values, and returns whether it is a valid UTF-8 encoding.
*/

class Main {
	private static final String otherRegex = "^10[01]{6}$";

	public static void main(String[] args) {
		boolean valid = true;
		switch(args.length) {
			case 1:
				valid = args[0].matches("^0[01]{7}$"); 
				break;
			case 2:
				valid = (args[0].matches("^110[01]{5}$") && 
					args[1].matches(otherRegex));
				break;
			case 3:
				valid = (args[0].matches("^1110[01]{4}$") && 
					args[1].matches(otherRegex) && 
					args[2].matches(otherRegex));
				break;
			case 4:
				valid = (args[0].matches("^11110[01]{3}$") && 
					args[1].matches(otherRegex) && 
					args[2].matches(otherRegex) && 
					args[3].matches(otherRegex));
				break;
			default:
				valid = false;
				break;
		}
		System.out.println("valid UTF-8: " + valid);
	}
}
