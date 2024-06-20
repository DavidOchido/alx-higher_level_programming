#!/usr/bin/node
/*  */
import java.util.ArrayList;
import java.util.List;

public class ListReverser {

    // Method to return the reversed version of a list
    public static <T> List<T> esrever(List<T> list) {
        List<T> reversedList = new ArrayList<>(list.size());
        for (int i = list.size() - 1; i >= 0; i--) {
            reversedList.add(list.get(i));
        }
        return reversedList;
    }

    public static void main(String[] args) {
        // Example usage
        List<Integer> list = List.of(1, 2, 3, 4, 5);
        List<Integer> reversed = esrever(list);
        System.out.println("Original list: " + list);
        System.out.println("Reversed list: " + reversed);
    }
}

