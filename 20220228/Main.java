/*
The area of a circle is defined as πr^2. Estimate π to 3 decimal places 
using a Monte Carlo method.

Hint: The basic equation of a circle is x2 + y2 = r2.
*/

class Main {
	public static void main(String[] args) {
		int steps = Integer.parseInt(args[0]);
		double interval = 1.0 / steps;
		double total = 0.0;
		for (double i = 0.0; i < 1.0; i += interval) {
			total += monteCarlo(i);
		}
		double avg = total / steps;
		double pi = avg * 4.0;
		System.out.println("Estimating pi with " + steps + " slices yields " + pi);
	}

	static double monteCarlo(double x) {
		return Math.sqrt(1 - (x * x));
	}
}
