import java.util.Arrays

class Main {
    
    // Solution 2: Sort the array and check if any adjacent elements are equal
    public static boolean S2_containsDuplicate(int[] nums) {
        Arrays.sort(nums);

        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] == nums[i + 1]) {
                return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        int[] nums = {1,5,3,2,5,4};

        if (S2_containsDuplicate(nums)) {
            System.out.println("Array contains duplicate")
        } else {
            System.out.println("Array does not contain duplicate")
        }
    }
}



