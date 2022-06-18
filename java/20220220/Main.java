/*
At a party, there is a single person who everyone knows, but who does not know anyone in return (the "celebrity"). 
To help figure out who this is, you have access to an O(1) method called knows(a, b), which returns True if person 
a knows person b, else False.

Given a list of N people and the above operation, find a way to identify the celebrity in O(N) time.
*/

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Random;

class Main {
	static final Random random = new Random();
	static ArrayList<Person> allPeople;

	public static void main(String[] args) {
		readNamesFromFile("yob1993.txt");
		int n = Integer.parseInt(args[0]);
		ArrayList<Person> partygoers = createParty(n);
		System.out.println(findCelebrity(partygoers));
	}

	public static Person findCelebrity(ArrayList<Person> party) {
		int interrogations = 0;
		Person[] validCelebs = party.toArray(Person[]::new);
		for (Person person : party) {
			System.out.print("interrogating " + person.name + "...");
			interrogations += validCelebs.length;
			// loop through validCelebs and ask if the current person knows them
			// if not, remove that person from the list of valid celebs
			validCelebs = Arrays.stream(validCelebs)
				.filter(p -> person.knows(p))
				.toArray(Person[]::new);
			if (validCelebs.length == 1) break;
			if (validCelebs.length == 0) {
				System.out.println("took " + interrogations + " interrogations");
				return person;
			}
			System.out.println("remaining suspects: " + validCelebs.length);
		}
		System.out.println("took " + interrogations + " interrogations");
		return validCelebs[0];
	}

	public static ArrayList<Person> createParty(int guestCount) {
		ArrayList<Person> party = new ArrayList<>();
		
		// select [guestCount] people at random to attend the party
		for (int i = 0; i < guestCount; i++) {
			party.add(allPeople.get(random.nextInt(25_000)));
		}

		// select a random guest to be a celebrity
		Person celeb = party.get(random.nextInt(guestCount));

		// form random relationships among remaining guests
		for (Person person : party) {
			int count = random.nextInt(guestCount) + 2;
			for (int i = 0; i < count; i++) {
				Person p = party.get(random.nextInt(guestCount));
				person.addToKnownPeople(p);
			}
			person.addToKnownPeople(celeb);
		}

		celeb.knownPeople = new ArrayList<>();

		return party;
	}

	public static void readNamesFromFile(String filename) {
		try (LineNumberReader reader = new LineNumberReader(new FileReader(filename))) {
			allPeople = new ArrayList<>();
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
	ArrayList<Person> knownPeople = new ArrayList<>();
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

	public String toString() {
		return name;
	}
}
