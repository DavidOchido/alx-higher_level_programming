#!/usr/bin/node
/*  */
import java.util.List;

public class OccurrenceCounter {

    // Method to return the number of occurrences of searchElement in the list
    public static int nbOccurrences(List<?> list, Object searchElement) {
        int count = 0;
        for (Object element : list) {
            if (element.equals(searchElement)) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        // Example usage
        List<Integer> list = List.of(1, 2, 3, 2, 4, 2, 5);
        int searchElement = 2;
        int occurrences = nbOccurrences(list, searchElement);
        System.out.println("Number of occurrences of " + searchElement + ": " + occurrences);
    }
}

