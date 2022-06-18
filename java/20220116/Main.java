/*
We're given a hashmap associating each courseId key with a list of courseIds values, which represents that the prerequisites of courseId are courseIds. 
Return a sorted ordering of courses such that we can finish all courses.

Return null if there is no such ordering.

For example, given {'CSC300': ['CSC100', 'CSC200'], 'CSC200': ['CSC100'], 'CSC100': []}, should return ['CSC100', 'CSC200', 'CSCS300'].
*/

import java.util.ArrayList;
import java.util.HashMap;

class Main {
	private static final HashMap<String, String[]> preReqList = new HashMap<>();

	public static void main(String[] args) {
		preReqList.put("CSC300", new String[] {"CSC100", "CSC200"});
		preReqList.put("CSC200", new String[] {"CSC100"});
		preReqList.put("CSC100", new String[] {});
		ArrayList<String> result = addPreReqs2();
		result.forEach(System.out::println);
	}

	public static ArrayList<String> addPreReqs() {
		ArrayList<String> result = new ArrayList<>();
		for (String course : preReqList.keySet()) {
			for (String preReq : preReqList.get(course)) {
				if (!result.contains(preReq)) result.add(0, preReq);
			}
			if (!result.contains(course)) result.add(course);
		}
		return result;
	}

	public static ArrayList<String> addPreReqs2() {
		ArrayList<String> result = new ArrayList<>();
		for (String course : preReqList.keySet()) {
			if (preReqList.get(course).length == 0) result.add(course);
		}
		if (result.size() == 0) return null;
		int counter = 1;
		while (result.size() < preReqList.keySet().size()) {
			for (String course : preReqList.keySet()) {
				if (preReqList.get(course).length == counter) {
					boolean valid = true;
					for (String preReq : preReqList.get(course)) {
						if (!result.contains(preReq)) valid = false;
					}
					if (valid) result.add(course);
				}
			}
			counter++;
		}
		return result;
	}
}
