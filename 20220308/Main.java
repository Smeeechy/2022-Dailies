/*
Implement a bit array.

A bit array is a space efficient array that holds a value of 1 or 0 at each index.

init(size): initialize the array with size
set(i, val): updates index at i with val where val is either 1 or 0.
get(i): gets the value at index i.
*/

class Main {
	public static void main(String[] args) {
		BitArray test = new BitArray(5);
		
		test.set(0, 1);
		test.set(1, 1);
		System.out.println(test.get(0));
		test.set(0, 0);
		System.out.println(test.get(0));
	}
}

class BitArray {
	// i couldn't find anywhere that actual bits are used in java so booleans are the next best thing
	boolean[] array;

	BitArray(int size) {
		this.array = new boolean[size];
	}

	void set(int index, int value) {
		array[index] = value > 0;
	}

	int get(int index) {
		return (array[index] ? 1 : 0);
	}
}
