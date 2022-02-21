/*
At a party, there is a single person who everyone knows, but who does not know anyone in return (the "celebrity"). 
To help figure out who this is, you have access to an O(1) method called knows(a, b), which returns True if person 
a knows person b, else False.

Given a list of N people and the above operation, find a way to identify the celebrity in O(N) time.
*/

import java.io.*;
import java.util.ArrayList;
import java.util.Random;

class Main {
	static final Random random = new Random();
	static ArrayList<Person> allPeople;

	static {
		readNamesFromFile("yob1993.txt");
	}

	public static void main(String[] args) {
		int n = Integer.parseInt(args[0]);
		ArrayList<Person> partygoers = createParty(n);
		System.out.println("success");
		// for (Person person : partygoers) System.out.println(person.name);
	}

	public static ArrayList<Person> createParty(int guestCount) {
		ArrayList<Person> party = new ArrayList<>();
		for (int i = 0; i < guestCount; i++) {
			party.add(allPeople.get(random.nextInt(25_000)));
		}
		return party;
	}

	public static void readNamesFromFile(String filename) {
		try (LineNumberReader reader = new LineNumberReader(new FileReader(filename))) {
			reader.readLine();
			for (int i = 1; i < 25_000; i++) {
				allPeople.add(new Person(reader.readLine().split(",")[0]));
			}
		} catch (Exception e) {
			System.out.print(e.getMessage());
		}
	}
}

class Person {
	final ArrayList<Person> knownPeople = new ArrayList<>();
	final String name;

	Person(String name) {
		this.name = name;
	}

	void addToKnownPeople(Person other) {
		if (!knownPeople.contains(other) && !other.name.equals(this.name)) knownPeople.add(other);
	}
	
	// we're pretending this method runs in constant time
	boolean knows(Person other) {
		return knownPeople.contains(other);
	}
}
