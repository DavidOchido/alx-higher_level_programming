#!/usr/bin/node
public class Square extends Rectangle {
    // Constructor that takes one argument
    public Square(int size) {
        super(size, size); // Call the constructor of Rectangle
    }

    // Method to print the square using the character 'c'
    public void charPrint(char c) {
        if (isEmpty()) {
            System.out.println("This is an empty square.");
        } else {
            for (int i = 0; i < height; i++) {
                for (int j = 0; j < width; j++) {
                    System.out.print(c);
                }
                System.out.println();
            }
        }
    }

    // Overloaded method to print the square using the character 'X' if 'c' is not provided
    public void charPrint() {
        charPrint('X');
    }

    public static void main(String[] args) {
        // Test the Square class
        Square square1 = new Square(4);
        System.out.println("Square with character '*':");
        square1.charPrint('*');

        System.out.println("\nSquare with default character:");
        square1.charPrint();

        Square square2 = new Square(0);
        System.out.println("\nEmpty Square:");
        square2.charPrint();

        Square square3 = new Square(-3);
        System.out.println("\nEmpty Square:");
        square3.charPrint();
    }
}

