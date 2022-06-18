/*
Write a function, throw_dice(N, faces, total), that determines how many ways it is possible to throw N dice with some number of faces each to 
get a specific total.

For example, throw_dice(3, 6, 7) should equal 15.  // there are 15 different ways to get a 7 when rolling 3 d6s
*/

import java.util.ArrayList;

class Main {
	private static ArrayList<ArrayList<Integer>> distinctRolls = new ArrayList<>();

	public static void main(String[] args) {
		int n = Integer.parseInt(args[0]);
		int faces = Integer.parseInt(args[1]);
		int total = Integer.parseInt(args[2]);
		throw_dice(n, faces, total);
	}

	public static void throw_dice(int n, int faces, int total) {
		throw_dice_rec(new ArrayList<Integer>(), n, faces);
		long count = distinctRolls.stream().filter(rollGroup -> rollGroup.stream().mapToInt(x -> x).sum() == total).count();
		System.out.println("There are " + count + " distinct ways to roll a " + total + ":");
		distinctRolls.stream()
			.filter(rollGroup -> rollGroup.stream().mapToInt(x -> x).sum() == total)
			.forEach(rollGroup -> {
				rollGroup.forEach(roll -> System.out.print(roll + " "));
				System.out.println("=> " + rollGroup.stream().mapToInt(x -> x).sum());
			});
	}

	private static void throw_dice_rec(ArrayList<Integer> prevRolls, int rollsRemaining, int dieFaces) {
		for (int face = 1; face <= dieFaces; face++) {
			ArrayList<Integer> newRolls = (ArrayList<Integer>) prevRolls.clone();
			newRolls.add(face);
			if (rollsRemaining == 1) {
				distinctRolls.add(newRolls);
			} else throw_dice_rec(newRolls, rollsRemaining - 1, dieFaces);
		}
	}
}
