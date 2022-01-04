/* 
You are given a string consisting of the letters x and y, such as xyxxxyxyy. 
In addition, you have an operation called flip, which changes a single x to y or vice versa.

Determine how many times you would need to apply this operation to ensure that all x's 
come before all y's. In the preceding example, it suffices to flip the second and sixth 
characters, so you should return 2.
*/

class Main {
	public static void main(String[] args) {
		String processed = args[0].split("y+$")[0];
		int flips = 0;
		for (char letter : processed.toCharArray()) {
			if (letter == 'y') flips++;
		}
		System.out.println(flips);
	}
}
