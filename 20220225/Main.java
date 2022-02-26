/*
In chess, the Elo rating system is used to calculate player strengths based on game results.

A simplified description of the Elo system is as follows. Every player begins at the same score. 
For each subsequent game, the loser transfers some points to the winner, where the amount of points 
transferred depends on how unlikely the win is. For example, a 1200-ranked player should gain much more 
points for beating a 2000-ranked player than for beating a 1300-ranked player.

Implement this system.
*/

import java.util.Arrays;
import java.util.ArrayList;
import java.util.Random;
import java.lang.StringBuilder;

class Main {
	static Random random = new Random();

	public static void main(String[] args) {
		String[] names = new String[] {
			"jooji", "klumbo", "roster", "myrtle", "kurt", "vurt", "lurt", "ginny",
			"bungus", "wungus", "maury", "scoot", "boomer", "zerma", "gooby", "jeepus"
		};

		Player[] players = Arrays.stream(names).map(name -> new Player(name)).toArray(Player[]::new);

		for (int i = 0; i < Integer.parseInt(args[0]); i++) {
			System.out.println("Tournament #" + (i + 1) + ":");
			tournament(players);
			printRankings(players);
			System.out.println("----------------------------");
		}
	}

	static void tournament(Player[] players) {
		for (Player player : players) {
			player.expectedResults = new ArrayList<>();
			player.actualResults = new ArrayList<>();
		}

		for (int i = 0; i < players.length; i++) {
			players[i].lastRank = i;
		}

		for (int i = 0; i < players.length; i++) {
			for (int j = i + 1; j < players.length; j++) {
				Player p1 = players[i];
				Player p2 = players[j];
				double p1Expected = 1 / (1 + Math.pow(10.0, (p2.score - p1.score) / 400.0));
				p1Expected = (int) (p1Expected * 100) / 100.0;
				double p2Expected = 1 - p1Expected;
				p1.expectedResults.add(p1Expected);
				p2.expectedResults.add(p2Expected);
				double result = (int) (random.nextDouble() * 100) / 100.0;
				if (result < p1Expected) {
					p1.actualResults.add(1.0);
					p2.actualResults.add(0.0);
				} else if (result > p1Expected) {
					p1.actualResults.add(0.0);
					p2.actualResults.add(1.0);
				} else {
					p1.actualResults.add(0.5);
					p2.actualResults.add(0.5);
				}
			}
		}

		for (Player player : players) {
			player.adjustElo();
		}

		Arrays.sort(players);
	}

	static void printRankings(Player[] players) {
		for (int i = 0; i < players.length; i++) {
			Player player = players[i];
			StringBuilder builder = new StringBuilder();
			builder.append(i + 1).append(":\t").append(player.name);
			if (i < player.lastRank) builder.append("\t↗");
			else if (i > player.lastRank) builder.append("\t↘");
			else builder.append("\t");
			builder.append("\t- ").append(player.score);
			if (player.lastDelta > 0) builder.append("\t(↗ ").append(player.lastDelta).append(")\t");
			else if (player.lastDelta < 0) builder.append("\t(↘ ").append(player.lastDelta * -1).append(")\t");
			else builder.append("\t");
			System.out.println(builder.toString());
		}
	}
}

class Player implements Comparable<Player> {
	int score = 1200;
	int lastDelta = 0;
	int lastRank = 0;
	String name;
	ArrayList<Double> expectedResults;
	ArrayList<Double> actualResults;
	double expectedSum;
	double actualSum;

	Player(String name) {
		this.name = name;
	}

	int getKFactor() {
		if (this.score >= 2000) return 16;
		else return 32;
	}

	// this is official elo math
	void adjustElo() {
		expectedSum = expectedResults.stream().mapToDouble(n -> n).sum();
		actualSum = actualResults.stream().mapToDouble(n -> n).sum();
		int delta = (int) (getKFactor() * (actualSum - expectedSum));
		this.score += delta;
		if (this.score < 0) this.score = 0;
		this.lastDelta = delta;
	}

	// this was what i came up with, it doesn't work very well
	void transferPoints(Player other) {
		int MINIMUM_ELO_CHANGE = 50;
		System.out.print(this + ", " + other);
		double eloDiff = Math.abs(this.score - other.score);
		double eloDiffPercent = eloDiff / (this.score + other.score);
		int amount;
		if (eloDiffPercent >= .5) {
			amount = (int) Math.max(eloDiffPercent * eloDiff, MINIMUM_ELO_CHANGE);
		} else {
			amount = (int) Math.max((1 - eloDiffPercent) * eloDiff, MINIMUM_ELO_CHANGE);
		}
		this.score -= (int) Math.min(amount, MINIMUM_ELO_CHANGE);
		if (this.score < 0) this.score = 0;
		other.score += (int) Math.max(amount, MINIMUM_ELO_CHANGE);
		System.out.println(" -> " + this + ", " + other);
	}

	public String getEloChange() {
		if (lastDelta > 0) return "↗" + lastDelta;
		else if (lastDelta < 0) return "↘" + (lastDelta * -1);
		else return "";
	}

	public String getTournamentData() {
		return "(" + this.expectedSum + ", " + this.actualSum + ")";
	}

	public int compareTo(Player other) {
		return other.score - this.score;
	}
}
