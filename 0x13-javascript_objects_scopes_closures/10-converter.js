#!/usr/bin/node
/*  */
public class BaseConverter {

    // Method to convert a number from base 10 to another base
    public static void converter(int number, int base) {
        // Base case for recursion
        if (number == 0) {
            return;
        }

        // Recursive call before printing
        converter(number / base, base);

        // Print the remainder (converted digit)
        int remainder = number % base;
        if (remainder < 10) {
            System.out.print(remainder);
        } else {
            char ch = (char) ('A' + remainder - 10); // Convert to letters A-F for bases > 10
            System.out.print(ch);
        }
    }

    public static void main(String[] args) {
        int number = 234; // Example number in base 10
        int base = 16;    // Example base (e.g., hexadecimal)

        System.out.print(number + " in base " + base + " is: ");
        converter(number, base);
        System.out.println();
    }
}

