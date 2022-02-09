/*
Implement a PrefixMapSum class with the following methods:

insert(key: str, value: int): Set a given key's value in the map. If the key already exists, overwrite the value.
sum(prefix: str): Return the sum of all values of keys that begin with a given prefix.
For example, you should be able to run the following code:

mapsum.insert("columnar", 3)
assert mapsum.sum("col") == 3

mapsum.insert("column", 2)
assert mapsum.sum("col") == 5
*/

class Main {
	public static void main(String[] args) {
		PrefixMapSum map = new PrefixMapSum();
		map.insert("columnar", 3);
		map.insert("column", 2);
		map.insert("cold", 4);
		map.insert("boy", 1);
		map.insert("girl", 2);
		map.insert("test", 5);
		map.insert("friend", 3);
		map.insert("colitis", -2);

		System.out.println(map);
		System.out.println(map.sum("col"));
	}
}

class PrefixMapSum {
	private final Entry[] map;

	PrefixMapSum() {
		this(16);
	}

	PrefixMapSum(int limit) {
		this.map = new Entry[limit];
	}

	class Entry {
		private String key;
		private int value;

		Entry(String key, int value) {
			this.key = key;
			this.value = value;
		}
	}

	boolean insert(String key, int value) {
		for (int i = 0; i < this.map.length; i++) {
			Entry entry = this.map[i];
			if (entry == null) {
				this.map[i] = new Entry(key, value);
				return true;
			} else if (entry.key.equals(key)) {
				entry.value = value;
				return true;
			}
		}
		return false;
	}

	int sum(String prefix) {
		int total = 0;
		for (Entry entry : this.map) {
			if (entry == null) break;
			else if (entry.key.startsWith(prefix)) total += entry.value;
		}
		return total;
	}

	@Override
	public String toString() {
		String result = "[";
		for (Entry entry : this.map) {
			if (entry == null) break;
			result += "(\"" + entry.key + "\", " + entry.value + "), ";
		}
		if (result.endsWith(", ")) result = result.substring(0, result.length() - 2);
		result += "]";
		return result;
	}
}
