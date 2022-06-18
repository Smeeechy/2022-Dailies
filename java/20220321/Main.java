/*
Given a function that generates perfectly random numbers between 1 and k (inclusive), where k is an input, write a function 
that shuffles a deck of cards represented as an array using only swaps.

It should run in O(N) time.

Hint: Make sure each one of the 52! permutations of the deck is equally likely.
*/

import java.util.Arrays;
import java.util.ArrayList;
import java.util.Random;

class Main {
	public static void main(String[] args) {
		Deck deck = new Deck();
		// System.out.println(Arrays.toString(deck.cards));
		deck.shuffle();
		System.out.println(Arrays.toString(deck.cards));
	}
}

class Card {
	enum Suit {
		CLUB,
		DIAMOND,
		HEART,
		SPADE
	}

	private final Suit suit;
	private final int number;

	Card(Suit suit, int number) {
		this.suit = suit;
		this.number = number;
	}

	@Override
	public String toString() {
		String result = "[";

		switch(number) {
			case 1:
				result += "A ";
				break;
			case 10:
				result += "⒑ ";
				break;
			case 11:
				result += "J ";
				break;
			case 12:
				result += "Q ";
				break;
			case 13:
				result += "K ";
				break;
			default:
				result += number + " ";
				break;
		}

		switch(suit) {
			case CLUB:
				result += "♣";
				break;
			case DIAMOND:
				result += "♦";
				break;
			case HEART:
				result += "♥";
				break;
			case SPADE:
				result += "♠";
				break;
			default:
				break;
		}

		return result + "]";
	}
}

class Deck {
	private static final Random random = new Random();

	Card[] cards;

	Deck() {
		ArrayList<Card> temp = new ArrayList<>();
		for (Card.Suit suit : Card.Suit.values()) {
			temp.addAll(Arrays.asList(generateFullSuit(suit)));
		}
		cards = temp.toArray(Card[]::new);
	}

	void shuffle() {
		for (int i = 0; i < cards.length; i++) {
			int swapIndex = random(52);
			Card temp = cards[swapIndex];
			cards[swapIndex] = cards[i];
			cards[i] = temp;
		}
	}

	private Card[] generateFullSuit(Card.Suit suit) {
		Card[] fullSuit = new Card[13];
		for (int i = 0; i < fullSuit.length; i++) {
			fullSuit[i] = new Card(suit, i + 1);
		}
		return fullSuit;
	}

	// this'll be the aforementioned perfectly random generator
	private int random(int k) {
		return random.nextInt(k);
	}
}
