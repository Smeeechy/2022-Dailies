/*
The skyline of a city is composed of several buildings of various widths and heights, possibly 
overlapping one another when viewed from a distance. We can represent the buildings using an 
array of (left, right, height) tuples, which tell us where on an imaginary x-axis a building 
begins and ends, and how tall it is. The skyline itself can be described by a list of (x, height) 
tuples, giving the locations at which the height visible to a distant observer changes, and each 
new height.

Given an array of buildings as described above, create a function that returns the skyline.

For example, suppose the input consists of the buildings [(0, 15, 3), (4, 11, 5), (19, 23, 4)]. 
In aggregate, these buildings would create a skyline that looks like the one below.

     ______  
    |      |        ___
 ___|      |___    |   | 
|   |   B  |   |   | C |
| A |      | A |   |   |
|   |      |   |   |   |
------------------------

As a result, your function should return [(0, 3), (4, 5), (11, 3), (15, 0), (19, 4), (23, 0)].
*/

import java.util.ArrayList;
import java.util.Random;

class Main {
	public static void main(String[] args) {
		Random random = new Random();
		int maxWidth = 0;
		int maxHeight = 0;

		ArrayList<Building> buildings = new ArrayList<>();
		if (args.length > 0) {
			for (int i = 0; i < args.length; i += 3) {
				int left = Integer.parseInt(args[i]);
				int right = Integer.parseInt(args[i + 1]);
				int height = Integer.parseInt(args[i + 2]);
				buildings.add(new Building(left, right, height));
				if (right > maxWidth) maxWidth = right;
				if (height > maxHeight) maxHeight = height;
			}
		} else {
			int buildingCount = random.nextInt(13) + 2;
			for (int i = 0; i < buildingCount; i++) {
				int left = random.nextInt(150);
				int right = left + random.nextInt(40) + 10;
				int height = random.nextInt(40) + 10;
				buildings.add(new Building(left, right, height));
				if (right > maxWidth) maxWidth = right;
				if (height > maxHeight) maxHeight = height;
			}
		}

		Skyline skyline = new Skyline(maxWidth + random.nextInt(9) + 1, maxHeight + 2);
		for (Building building : buildings) {
			skyline.addBuilding(building);
		}

		skyline.print();
	}
}

class Building {
	int left, right, height;

	Building(int left, int right, int height) {
		this.left = left;
		this.right = right;
		this.height = height;
	}
}

class Skyline {
	enum Cell {
		FRONT,
		WALL,
		ROOF,
		EMPTY
	}

	private int width, height;
	private Cell[][] grid;
	final ArrayList<Building> buildings = new ArrayList<>();

	Skyline(int width, int height) {
		this.width = width;
		this.height = height;

		// initialize an empty grid
		this.grid = new Cell[height + 1][width + 1];
		for (int y = 0; y < this.grid.length; y++) {
			for (int x = 0; x < this.grid[0].length; x++) {
				grid[y][x] = Cell.EMPTY;
			}
		}
	}

	void addBuilding(Building building) {
		this.buildings.add(building);
		updateGrid(building);
	}

	void updateGrid(Building building) {
		for (int y = 0; y <= building.height; y++) {
			for (int x = building.left; x <= building.right; x++) {
				if (y == building.height) grid[y][x] = Cell.ROOF;
				else if (x == building.left || x == building.right) grid[y][x] = Cell.WALL;
				else grid[y][x] = Cell.FRONT;
			}
		}
	}

	// TODO: implement
	ArrayList<int[]> toList() {
		ArrayList<int[]> list = new ArrayList<>();
		return list;
	}

	void print() {
		String map = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?+<>i!lI;:,^`'. ";
		System.out.println();
		for (int row = this.grid.length - 1; row >= 0; row--) {
			for (int col = 0; col < this.grid[0].length; col++) {
				switch(grid[row][col]) {
					case FRONT:
						System.out.print(" ");
						break;
					case WALL:
						System.out.print("|");
						break;
					case ROOF:
						System.out.print("_");
						break;
					default:
						System.out.print(map.substring(map.length() - row - 1, map.length() - row));
						break;
				}
			}
			System.out.println();
		}

		// printing the floor
		for (int col = 0; col < this.grid[0].length; col++) {
			System.out.print("-");
		}
	}
}
