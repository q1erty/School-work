public class Introduction {
    public static void main(String[] args) {
        //Given the provided 2d array
        int[][] intMatrix = {
            { 4,  6,  8, 10, 12, 14, 16},
            {18, 20, 22, 24, 26, 28, 30},
            {32, 34, 36, 38, 40, 42, 44},
            {46, 48, 50, 52, 54, 56, 58},
            {60, 62, 64, 66, 68, 70, 79}
        };
        /* Store the number of subarrays of intMatrix into a variable
        called 'numSubArrays' */
        int numSubArrays = intMatrix.length;
        /* Store the length of the subarrays using the first subarray
        in intMatrix. Store it in variable called subArrayLength */
        int subArrayLength = intMatrix[0].length;

        // Store the number of columns in intMatrix into a variable called 'columns'
        int columns = subArrayLength;

        // Store the number of rows in intMatrix into a variable called 'rows'
        int rows = numSubArrays;

        /* Replace the outer and inner for loop headers 
        to iterate through the entire 2D array.
        Use the iterators 'i' for the outer loop and 'j' for the inner loop. */

        int sum = 0;
        for(int i = 0; i < columns; i++) {
            for(int j = 0; j < rows; j++) {
                // Insert a line of code to increase the variable 'sum' by each accsessed element
                sum +=intMatrix[i][j];
            }
        }

       System.out.println(sum); 
        
    }
}
