/*
Spreadsheets often use this alphabetical encoding for its columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....

Given a column number, return its alphabetical column id. For example, given 1, return "A". Given 27, return "AA".
*/

import java.lang.StringBuilder;

class Main {
	public static void main(String[] args) {
		int col = Integer.parseInt(args[0]);
		System.out.println(getColumn(col));
	}

	public static String getColumn(int id) {
		int pow = 0;
		StringBuilder builder = new StringBuilder();
		String map = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		while (true) {
			if (id == 0) break;
			int index = (id / (int) Math.pow(26, 0) % 26);
			builder.append(map.substring(index, index + 1));
			id /= 26;
			id--;
		}
		return builder.reverse().toString();
	}
}
