/*
Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.
*/

import java.util.Arrays;
import java.util.ArrayList;
import java.util.Collections;

class Main {
	public static void main(String[] args) {
		int[] input = Arrays.stream(args).mapToInt(Integer::parseInt).toArray();
		ArrayList<Pair> pairs = new ArrayList<>();
		for (int i = 0; i < input.length; i += 2) {
			pairs.add(new Pair(input[i], input[i + 1]));
		}
		Collections.sort(pairs);
		ArrayList<ArrayList<Pair>> buckets = new ArrayList<>();
		for (Pair pair : pairs) {
			if (buckets.isEmpty()) {
				ArrayList<Pair> newBucket = new ArrayList<>();
				newBucket.add(pair);
				buckets.add(newBucket);
			} else {
				for (int i = 0; i < buckets.size(); i++) {
					ArrayList<Pair> currentBucket = buckets.get(i);
					if (currentBucket.get(currentBucket.size() - 1).end <= pair.start) {
						currentBucket.add(pair);
						break;
					} else {
						if (i == buckets.size() - 1) {
							ArrayList<Pair> newBucket = new ArrayList<>();
							newBucket.add(pair);
							buckets.add(newBucket);
							break;
						}
					}
				}
			}
		}
		System.out.println("this would take " + buckets.size() + " bucket(s):");
		buckets.forEach(bucket -> {
			bucket.forEach(System.out::print);
			System.out.println();
		});
	}
}

class Pair implements Comparable {
	int start, end;

	Pair(int x, int y) {
		this.start = x;
		this.end = y;
	}

	@Override
	public int compareTo(Object other) {
		if (other instanceof Pair) {
			if (this.start < ((Pair) other).start) return -1;
			else if (this.start > ((Pair) other).start) return 1;
			else {
				if (this.end < ((Pair) other).end) return -1;
				else if (this.end > ((Pair) other).end) return 1;
				else return 0;
			}
		}
		return 0;
	}

	@Override
	public String toString() {
		return "(" + this.start + ", " + this.end + ") ";
	}
}
