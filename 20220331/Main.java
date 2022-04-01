/*
Blackjack is a two player card game whose rules are as follows:

- The player and then the dealer are each given two cards.
- The player can then "hit", or ask for arbitrarily many additional cards, so long as their total does not exceed 21.
- The dealer must then hit if their total is 16 or lower, otherwise pass.
- Finally, the two compare totals, and the one with the greatest sum not exceeding 21 is the winner.
- For this problem, cards values are counted as follows: each card between 2 and 10 counts as their face value, face 
cards count as 10, and aces count as 1.

Given perfect knowledge of the sequence of cards in the deck, implement a blackjack solver that maximizes the player's 
score (that is, wins minus losses).
*/

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Random;

class Main {
	public static void main(String[] args) {
		Deck deck = new Deck();
		deck.shuffle();

		Player player = new Player("Player");
		Player dealer = new Player("Dealer");

		int round = 1;
		while (deck.cards.length >= 4) {
			System.out.println("Round " + round++);
			Player roundWinner = playRound(player, dealer, deck);
			if (roundWinner == player) player.wins++;
			else if (roundWinner == dealer) dealer.wins++;
			System.out.println("====================");
		}

		Player winner = (player.wins > dealer.wins ? player : dealer);
		String score = (winner == player ? player.wins + ":" + dealer.wins : dealer.wins + ":" + player.wins);
		System.out.println(winner.name + " wins " + score);
	}

	public static Player playRound(Player player, Player dealer, Deck deck) {
		Player winner = null;
		dealStartingHands(player, dealer, deck);
		printHands(player, dealer);
		System.out.println("********************");

		// continue to deal out cards until both players hold or one busts
		// dealer must hit if hand total is 16 or lower, otherwise pass
		while (deck.cards.length >= 2) {
			if (player.handTotal() + deck.peek().value() <= 21) player.hand.add(deck.deal());
			else player.hold();
			if (dealer.handTotal() <= 16) dealer.hand.add(deck.deal());
			else dealer.hold();
			printHands(player, dealer);
			if (player.isHolding() && dealer.isHolding()) {
				if (player.handTotal() <= 21 && dealer.handTotal() > 21) winner = player;
				else if (player.handTotal() > 21 && dealer.handTotal() <= 21) winner = dealer;
				else if (player.handTotal() <= 21 && dealer.handTotal() <= 21) {
					if (dealer.handTotal() >= player.handTotal()) winner = dealer;
					else winner = player;
				}
				break;
			} else System.out.println("--------------------");
		}
		if (winner != null) System.out.println(winner.name + " wins");
		else System.out.println("Draw");
		return winner;
	}

	// deal out starting hands to player and dealer
	static void dealStartingHands(Player player, Player dealer, Deck deck) {
		player.reset();
		dealer.reset();
		player.hand.add(deck.deal());
		dealer.hand.add(deck.deal());
		player.hand.add(deck.deal());
		dealer.hand.add(deck.deal());
	}

	static void printHands(Player player, Player dealer) {
		System.out.println(dealer);
		System.out.println(player);
	}
}

class Player {
	String name;
	ArrayList<Card> hand;
	boolean holding = false;
	int wins = 0;

	Player(String name) {
		this.name = name;
		reset();
	}

	int handTotal() {
		int total = 0;
		for (Card card : hand) {
			total += card.value();
		}
		return total;
	}

	void hold() {
		this.holding = true;
	}

	boolean isHolding() {
		return this.holding;
	}

	void reset() {
		this.hand = new ArrayList<Card>();
		this.holding = false;
	}

	@Override
	public String toString() {
		String result = this.name + ": ";
		for (Card card : this.hand) {
			result += card + " ";
		}
		return result;
	}
}

/* originally from my March 21st daily, just added in some nice utility methods */

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

	int value() {
		return (int) Math.min(number, 10);
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

	Card peek() {
		if (this.cards.length == 0) return null;
		else return this.cards[0];
	}

	Card deal() {
		if (this.cards.length == 0) return null;
		Card card = this.cards[0];
		this.cards = Arrays.stream(this.cards).skip(1).toArray(Card[]::new);
		return card;
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
