#!/usr/bin/node
/*  */
public class ArgumentLogger {
    // Static variable to keep track of the number of arguments printed
    private static int count = 0;

    // Method to print the number of arguments already printed and the new argument value
    public static void logMe(Object item) {
        System.out.println(count + ": " + item);
        count++;
    }

    public static void main(String[] args) {
        // Example usage
        logMe("Hello");
        logMe(123);
        logMe(45.67);
        logMe(true);
    }
}

