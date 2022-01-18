/*
You are given a histogram consisting of rectangles of different heights. These heights are represented in an input list, such that 
[1, 3, 2, 5] corresponds to the following diagram:

       x
       x  
   x   x
   x x x
 x x x x

Determine the area of the largest rectangle that can be formed only from the bars of the histogram. For the diagram above, for example, 
this would be six, representing the 2 x 3 area at the bottom right.
*/

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.stream.Collectors;

class Main {
	public static void main(String[] args) {
		ArrayList<Integer> list = new ArrayList<>(Arrays.stream(args).map(arg -> Integer.parseInt(arg)).collect(Collectors.toList()));
		int minN = Collections.min(list);
		int maxN = Collections.max(list);
		int maxArea = minN * list.size();
		System.out.println("minN=" + minN);
		System.out.println("maxN=" + maxN);
		System.out.println("default maxArea=" + maxArea);
		for (int i = minN; i < maxN; i++) {
			System.out.println("splitting on " + i);
			ArrayList<ArrayList<Integer>> splitList = split(list, i);
			for (ArrayList<Integer> chunk : splitList) {
				if (chunk.isEmpty()) continue;
				chunk.forEach(n -> System.out.print(n + " "));
				int x = chunk.size();
				int y = Collections.min(chunk);
				int area = x * y;
				System.out.print("x=" + x + " ");
				System.out.print("y=" + y + " ");
				System.out.println("area=" + area);
				if (area > maxArea) maxArea = area;
			}
		}
		System.out.println("maxArea=" + maxArea);
	}

	public static ArrayList<ArrayList<Integer>> split(ArrayList<Integer> list, int n) {
		ArrayList<ArrayList<Integer>> result = new ArrayList<>();
		result.add(new ArrayList<Integer>());
		for (int i = 0; i < list.size(); i++) {
			int el = list.get(i);
			if (el <= n) {
				if (!result.get(result.size() - 1).isEmpty()) result.add(new ArrayList<>());
			} else result.get(result.size() - 1).add(el);
		}
		return result;
	}
}
