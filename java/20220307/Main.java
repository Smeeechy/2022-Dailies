/*
Given a list of possibly overlapping intervals, return a new list of intervals where all overlapping intervals have been merged.

The input list is not necessarily ordered in any way.

For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1, 3), (4, 10), (20, 25)].
*/

import java.util.Arrays;
import java.util.ArrayList;
import java.util.Collections;

class Main {
	public static void main(String[] args) {
		ArrayList<Duple> intervals = new ArrayList<>();

		// parsing inputs:
		// a b c d  ->  [(a, b), (c, d)]
		for (int i = 0; i + 1 < args.length; i += 2) {
			intervals.add(new Duple(Integer.parseInt(args[i]), Integer.parseInt(args[i + 1])));
		}

		// sort, then print input list
		Collections.sort(intervals);
		System.out.println(intervals);

		// test all pairs of intervals
		// if they overlap, add the result of their merging to a result set
		// otherwise, add both to the result set
		// repeat until no changes occur
		boolean changed = true;
		while (changed) {
			changed = false;
			for (int i = 0; i < intervals.size(); i++) {
				for (int j = i + 1; j < intervals.size(); j++) {
					Duple first = intervals.get(i);
					Duple second = intervals.get(j);
					if (first.overlaps(second)) {
						intervals.remove(first);
						intervals.remove(second);
						intervals.add(first.merge(second));
						changed = true;
					}
				}
			}
		}

		// sort, then print resulting list
		Collections.sort(intervals);
		System.out.println(intervals);
	}
}

class Duple implements Comparable {
	int start, end;

	Duple(int start, int end) {
		this.start = start;
		this.end = end;
	}

	// returns new Duple with minimum start and maximum end
	Duple merge(Duple other) {
		int newStart, newEnd;
		if (this.start < other.start) newStart = this.start;
		else newStart = other.start;
		if (this.end > other.end) newEnd = this.end;
		else newEnd = other.end;
		return new Duple(newStart, newEnd);
	}

	// returns true if one interval's start is completely within bounds of the other interval
	boolean overlaps(Duple other) {
		return (this.start >= other.start && this.start <= other.end) || 
			(other.start >= this.start && other.start <= this.end);
	}

	@Override
	public int compareTo(Object o) {
		return (int) Math.signum(this.start - ((Duple) o).start);
	}

	@Override
	public String toString() {
		return "(" + this.start + ", " + this.end + ")";
	}
}
