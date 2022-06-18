/*
You are given a list of N points (x1, y1), (x2, y2), ..., (xN, yN) representing a polygon. You can assume these points are given in 
order; that is, you can construct the polygon by connecting point 1 to point 2, point 2 to point 3, and so on, finally looping around 
to connect point N to point 1.

Determine if a new point p lies inside this polygon. (If p is on the boundary of the polygon, you should return False).
*/

class Main {
	public static void main(String[] args) {
		Point[] polygon = new Point[] {
			new Point(1, 1),
			new Point(2, 6),
			new Point(3, 3),
			new Point(4, 4),
			new Point(5, 3),
			new Point(7, 3),
			new Point(5, 1),
			new Point(4, 2),
			new Point(3, 1)
		};

		double x = Double.parseDouble(args[0]);
		double y = Double.parseDouble(args[1]);
		Point point = new Point(x, y);

		String result = (pointInsidePolygon(point, polygon) ? "inside" : "outside");
		System.out.println("(" + x + ", " + y + ") is " + result + " the polygon");
	}

	public static boolean pointInsidePolygon(Point point, Point[] polygon) {
		// arbitrarily chose some end point far away but not near the integer limit to avoid wonky/erroneous cross products
		Line ray = new Line(point, new Point(10000, 10000));
		
		// loop through each pair of contiguous points in the polygon and create a line from them
		// test whether or not this line intersects our ray from above and increment a counter if so
		int intersections = 0;
		for (int i = 0; i < polygon.length; i++) {
			int j = i + 1;
			if (j == polygon.length) j = 0;
			Line current = new Line(polygon[i], polygon[j]);
			if (ray.intersects(current)) intersections++;
		}

		// according to people who know a lot more about geometry/math, an odd number of intersections means the point is inside the polygon
		return intersections % 2 == 1;
	}

}

class Point {
	double x, y;

	Point(double x, double y) {
		this.x = x;
		this.y = y;
	}
}

class Line {
	Point p0, p;

	Line(Point p0, Point p) {
		this.p0 = p0;
		this.p = p;
	}

	// returns 1 if cross product is positive and -1 if negative, otherwise 0
	int crossProductSign(Point point) {
		if ((this.p0.x - point.x) * (this.p.y - point.y) - (this.p.x - point.x) * (this.p0.y - point.y) >= 0) return 1;
		if ((this.p0.x - point.x) * (this.p.y - point.y) - (this.p.x - point.x) * (this.p0.y - point.y) < 0) return -1;
		return 0;
	}

	// if both lines's cross products with other line's points cancel out, they intersect
	boolean intersects(Line line) {
		if (crossProductSign(line.p0) + crossProductSign(line.p) != 0) return false;
		if (line.crossProductSign(this.p0) + line.crossProductSign(this.p) != 0) return false;
		return true;
	}
}
