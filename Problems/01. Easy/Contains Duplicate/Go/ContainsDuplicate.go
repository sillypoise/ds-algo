package main

import (
	"fmt"
	"sort"
)

// Solution 2: Sort the array and check if any adjacent elements are equal

func S2_containsDuplicate(nums []int) bool {
	// sort the slice in ascending order
	sort.Ints(nums)

	// Check for adjacent duplicates
	for i := 0; i < len(nums)-1; i++ {
		if nums[i] == nums[i+1] {
			return true
		}
	}
	return false
}

// Main

func main() {
	nums := []int{1, 5, 3, 2, 5, 4}

	if S2_containsDuplicate(nums) {
		fmt.Println("The array contains duplicates")
	} else {
		fmt.Println("The array does not contain duplicates")
	}

}
