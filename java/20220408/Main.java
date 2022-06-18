/*
Gray code is a binary code where each successive value differ in only one bit, as well as when wrapping around. 
Gray code is common in hardware so that we don't see temporary spurious values during transitions.

Given a number of bits n, generate a possible gray code for it.

For example, for n = 2, one gray code would be [00, 01, 11, 10].
*/

import java.util.ArrayList;
import java.util.Arrays;

class Main {
	public static void main(String[] args) {
		int n = Integer.parseInt(args[0]);
		ArrayList<String> grayCode = grayCode(n);
		System.out.println(grayCode);
	}

	public static ArrayList<String> grayCode(int n) {
		ArrayList<String> grayCode = new ArrayList<>();
		String bin = "";
		for (int i = 0; i < n; i++) {
			bin += "0";
		}
		for (int i = 0; i < n; i++) {
			bin = bin.substring(1) + "1";
			grayCode.add(bin);
		}
		for (int i = 0; i < n; i++) {
			bin = bin.substring(1) + "0";
			grayCode.add(bin);
		}
		return grayCode;
	}
}
