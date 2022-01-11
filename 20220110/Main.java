/*
Using a read7() method that returns 7 characters from a file, implement readN(n) which reads n characters.

For example, given a file with the content “Hello world”, three read7() returns “Hello w”, “orld” and then “”.
*/

import java.nio.file.*;
import java.io.*;

class Main {
	private static FileReader FR;

	public static void main(String[] args) {
		System.out.println(readN(Integer.parseInt(args[0])));
	}

	public static String readN(int n) {
		String output = "";
		try {
			FR = new FileReader("data.txt");
			while (output.length() < n) {
				String buf = read7();
				output += buf;
				if (buf.equals("")) break;
			}
			if (output.length() > n) {
				output = output.substring(0, n);
			}
		} catch (IOException e) {
			// this is bad practice i know but i don't care for this small of a thing
		} finally {
			return output;
		}
	}

	public static String read7() {
		try {
			char[] chars = new char[7];
			FR.read(chars);
			return new String(chars);
		} catch (IOException e) {
			System.out.println(e.getMessage());
			return "error";
		}
	}
}
