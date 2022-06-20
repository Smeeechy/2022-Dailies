/*
Implement a heap sorting algorithm.
*/

import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

class Main {
	public static void main(String[] args) {
		int[] nums = Arrays.stream(args).mapToInt(n -> Integer.parseInt(n)).toArray();
		int[] sorted = Program.heapSort(nums);
		System.out.println(Arrays.toString(sorted));
	}
}

class Program {
	public static int[] heapSort(int[] array) {
		ArrayList<Integer> heap = new ArrayList<>();

		// create max heap
		for (int num : array) {
			heap.add(num);
			siftUp(heap);
		}

		ArrayList<Integer> sorted = new ArrayList<>();
		while (!heap.isEmpty()) {
			// add heap root value to the beginning of the sorted array
			sorted.add(0, heap.get(0));
			// replace root with last heap element
			heap.set(0, heap.get(heap.size() - 1));
			// reduce heap size and sift down
			heap.remove(heap.size() - 1);
			siftDown(heap);
		}

		return sorted.stream().mapToInt(n -> n).toArray();
	}

	public static void siftUp(List<Integer> heap) {
		int current = heap.size() - 1;
		int parent = getParent(current);
		while (parent >= 0) {
			if (heap.get(parent) < heap.get(current)) {
				swap(heap, current, parent);
				current = parent;
				parent = getParent(current);
			} else break;
		}
	}

	public static void siftDown(List<Integer> heap) {
		int current = 0;
		int[] children = getChildren(current);
		int maxChild;
		while (children[0] < heap.size()) {
			if (children[0] < heap.size()) maxChild = children[0];
			else break;
			if (children[1] < heap.size() && heap.get(children[1]) > heap.get(children[0])) maxChild = children[1];
			if (heap.get(current) < heap.get(maxChild)) {
				swap(heap, current, maxChild);
				current = maxChild;
				children = getChildren(current);
			} else break;
		}
	}

	public static void swap(List<Integer> heap, int i, int j) {
		int temp = heap.get(i);
		heap.set(i, heap.get(j));
		heap.set(j, temp);
	}

	public static int[] getChildren(int index) {
		return new int[] { index * 2 + 1, index * 2 + 2 };
	}

	public static int getParent(int index) {
		return (index - 1) / 2;
	}
}
