#!/usr/bin/node
/*  */
public class Rectangle {
    // Instance attributes
    private Integer width;
    private Integer height;

    // Constructor that takes two arguments
    public Rectangle(int w, int h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        } else {
            // Create an empty object if w or h is 0 or not positive
            this.width = null;
            this.height = null;
        }
    }

    // Getter for width
    public Integer getWidth() {
        return width;
    }

    // Setter for width
    public void setWidth(Integer width) {
        if (width > 0) {
            this.width = width;
        } else {
            this.width = null;
        }
    }

    // Getter for height
    public Integer getHeight() {
        return height;
    }

    // Setter for height
    public void setHeight(Integer height) {
        if (height > 0) {
            this.height = height;
        } else {
            this.height = null;
        }
    }

    // Method to check if the rectangle is empty
    public boolean isEmpty() {
        return width == null || height == null;
    }

    // Method to print the rectangle using the character 'X'
    public void print() {
        if (isEmpty()) {
            System.out.println("This is an empty rectangle.");
        } else {
            for (int i = 0; i < height; i++) {
                for (int j = 0; j < width; j++) {
                    System.out.print('X');
                }
                System.out.println();
            }
        }
    }

    public static void main(String[] args) {
        // Test the Rectangle class
        Rectangle rect1 = new Rectangle(4, 3);
        rect1.print();

        Rectangle rect2 = new Rectangle(0, 3);
        rect2.print();

        Rectangle rect3 = new Rectangle(5, -1);
        rect3.print();
    }
}

