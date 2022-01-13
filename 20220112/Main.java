/*
There are N prisoners standing in a circle, waiting to be executed. The executions are carried out starting with the kth person, 
and removing every successive kth person going clockwise until there is no one left.

Given N and k, write an algorithm to determine where a prisoner should stand in order to be the last survivor.

For example, if N = 5 and k = 2, the order of executions would be [2, 4, 1, 5, 3], so you should return 3.

Bonus: Find an O(log N) solution if k = 2.
*/

import java.util.HashMap;

class Main {
	public static void main(String[] args) {
		int n = Integer.parseInt(args[0]);
		int k = Integer.parseInt(args[1]);
		HashMap<Integer, Boolean> map = new HashMap<>();
		for (int i = 0; i < n; i++) {
			map.put(i, true);
		}
		map.forEach((a, b) -> System.out.print(a + ":" + b + " "));
		System.out.println();
		int key = 0;
		int counter = 1;
		while(map.containsValue(true)) {
			if (counter == k) {
				map.put(key, false);
				counter = 1;
				map.forEach((a, b) -> System.out.print(a + ":" + b + " "));
				System.out.println();
			} else {
				key = (key + 1) % n;
				counter++;
			}
		}
		System.out.println(key);
	}
}
