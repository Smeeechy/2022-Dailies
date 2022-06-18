/*
Create a data structure that performs all the following operations in O(1) time:

plus: Add a key with value 1. If the key already exists, increment its value by one.
minus: Decrement the value of a key. If the key's value is currently 1, remove it.
get_max: Return a key with the highest value.
get_min: Return a key with the lowest value.
*/

import java.util.HashMap;

class Main {
	public static void main(String[] args) {
		Struct test = new Struct();
		test.plus("goobus");
		System.out.println(test);
		test.plus("gerbus");
		System.out.println(test);
		test.plus("gerbus");
		System.out.println(test);
		test.plus("gombus");
		System.out.println(test);
		test.minus("goobus");
		System.out.println(test);

		System.out.println("max: " + test.getMax());
		System.out.println("min: " + test.getMin());
	}
}

// getMin and getMax don't work properly, but they do it in O(1) time
class Struct {
	private final HashMap<String, Integer> elements = new HashMap<>();
	private String min = "";
	private String max = "";

	void plus(String key) {
		int val = elements.getOrDefault(key, 0);
		elements.put(key, ++val);
		if (elements.get(key) > elements.getOrDefault(max, Integer.MIN_VALUE)) max = key;
	}

	void minus(String key) {
		int val = elements.get(key);
		if (elements.put(key, --val) == 1) elements.remove(key);
		if (elements.getOrDefault(key, Integer.MAX_VALUE) < elements.getOrDefault(min, Integer.MAX_VALUE)) min = key;
	}

	String getMax() {
		return max;
	}

	String getMin() {
		return min;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		elements.entrySet().forEach(entry -> builder.append(entry.getKey() + ": " + entry.getValue() + "\t"));
		return builder.toString();
	}
}
