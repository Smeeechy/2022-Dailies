/*
Implement an LRU (Least Recently Used) cache. It should be able to be initialized with a cache size n, and contain the 
following methods:

set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, then it should 
also remove the least recently used item.
get(key): gets the value at key. If no such key exists, return null.

Each operation should run in O(1) time.
*/

import java.util.Arrays;
import java.util.ArrayDeque;
import java.util.HashMap;

class Main {
	public static void main(String[] args) {
		int capacity = Integer.parseInt(args[0]);
		LRUCache<Integer, String> cache = new LRUCache<>(capacity);

		cache.set(101, "First");
		cache.set(102, "Second");
		cache.set(103, "Third");
		cache.set(104, "Fourth");
		cache.set(105, "Fifth");

		cache.map.entrySet().forEach(entry -> System.out.println(entry.getKey() + ": " + entry.getValue()));
	}
}

class LRUCache<K, V> {
	int capacity;
	ArrayDeque<K> deque;
	HashMap<K, V> map;

	public LRUCache(int capacity) {
		this.capacity = capacity;
		this.deque = new ArrayDeque<K>();
		this.map = new HashMap<K, V>();
	}

	public void set(K key, V value) {
		if (this.deque.size() == capacity) {
			K oldKey = deque.poll();
			map.remove(oldKey);
		}
		deque.offer(key);
		map.put(key, value);
	}

	public V get(K key) {
		return map.get(key);
	}
}
