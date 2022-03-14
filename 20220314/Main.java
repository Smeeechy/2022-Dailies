/*
Create a data structure that performs all the following operations in O(1) time:

plus: Add a key with value 1. If the key already exists, increment its value by one.
minus: Decrement the value of a key. If the key's value is currently 1, remove it.
get_max: Return a key with the highest value.
get_min: Return a key with the lowest value.
*/

import java.util.Arrays;
import java.util.ArrayList;

class Main {
	public static void main(String[] args) {
		ArrayList<Integer> test = new ArrayList<>();
		System.out.println(test.get(0));
	}
}

// i'll make it for storing integers but i think theoretically you could adapt it to store anything hashed
class Struct {
	final ArrayList<Integer> entries = new ArrayList<>();

	void plus(int key) {
		
	}

	void minus(int key) {
		
	}

	int getMax() {
		return -1;
	}

	int getMin() {
		return -1;
	}
}
