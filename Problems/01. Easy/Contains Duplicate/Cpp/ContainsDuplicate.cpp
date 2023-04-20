#include <iostream>
#include <vector>
#include <algorithm> // std::sort


// Solution 2: Sort the array and check if any adjacent elements are equal.
bool S2_containsDuplicate(std::vector<int> &nums) {
    // use .begin() and .end() to get the iterators for the vector
    std::sort(nums.begin(), nums.end()); // O(n log n)

    for (size_t i = 0; i < nums.size() - 1; i++) { // O(n)
        if (nums[i] == nums[i + 1]) {
            return true;
      }
  }
  return false;
}

// Main
int main(int argc, char *argv[]) {
    std::vector<int> nums = {1, 5, 3, 2, 5, 4};

    if (S2_containsDuplicate(nums)) {
        std::cout << "Array contains duplicates." << std::endl;
    } else {
        std::cout << "Array does not contain duplicates." << std::endl;
    }

    return 0;
}
