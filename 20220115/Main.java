/*
You are given N identical eggs and access to a building with k floors. Your task is to find the lowest floor that will 
cause an egg to break, if dropped from that floor. Once an egg breaks, it cannot be dropped again. If an egg breaks when 
dropped from the xth floor, you can assume it will also break when dropped from any floor greater than x.

Write an algorithm that finds the minimum number of trial drops it will take, in the worst case, to identify this floor.

For example, if N = 1 and k = 5, we will need to try dropping the egg at every floor, beginning with the first, until we 
reach the fifth floor, so our solution will be 5.
*/

import java.util.Arrays;
import java.util.stream.IntStream;
import java.util.Random;

class Main {
	public static void main(String[] args) {
		Random prng = new Random();
		int eggs = Integer.parseInt(args[0]);
		int[] floors = IntStream.rangeClosed(1, Integer.parseInt(args[1])).toArray();
		int breaks = prng.nextInt(floors.length);
		int trials = 0;

		while (eggs > 1 && floors.length > 1) {
			System.out.println("# of eggs: " + eggs);
			int test = (floors.length / 2) + floors[0];
			System.out.print("testing floor " + test + "...");
			trials++;
			if (test >= breaks) {
				System.out.println("egg broke");
				eggs--;
				floors = Arrays.stream(floors).filter(n -> n < test).toArray();
			} else {
				System.out.println("egg survived");
				floors = Arrays.stream(floors).filter(n -> n >= test).toArray();
			}
			if (floors.length > 100) {
				System.out.println("remaining floors: " + floors[0] + "-" + floors[floors.length - 1]);
			} else {
				System.out.println("remaining floors: " + Arrays.toString(floors));
			}
		}

		if (floors.length == 1) {
			System.out.println("last floor left is " + floors[0]);
		} else {
			System.out.println("one egg left, starting at floor " + floors[0]);
			for (int floor : floors) {
				trials++;
				if (floor >= breaks) {
					System.out.println("broke on floor " + breaks);
					break;
				}
			}
		}
		System.out.println("took " + trials + " trials");
	}
}
