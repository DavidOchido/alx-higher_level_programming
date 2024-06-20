#!/usr/bin/node
/*  */
public class Square extends Rectangle {
    // Constructor that takes one argument
    public Square(int size) {
        super(size, size); // Call the constructor of Rectangle
    }

    public static void main(String[] args) {
        // Test the Square class
        Square square1 = new Square(4);
        System.out.println("Square:");
        square1.print();

        Square square2 = new Square(0);
        System.out.println("\nEmpty Square:");
        square2.print();

        Square square3 = new Square(-3);
        System.out.println("\nEmpty Square:");
        square3.print();
    }
}

