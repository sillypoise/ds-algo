#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>



// Solution 2: Sort and Compare

// write compare function for qsort
int compare(const void *a, const void *b) {
    // cast void pointers to int *
    // and dereference values
    return (*(int *)a - *(int *)b);
}

bool S2_contains_duplicate(int *nums, size_t length) {
    // O(n log n)
    qsort(nums, length, sizeof(int), compare);

    // O(n)
    for (size_t i = 0; i < length - 1; i++) {
        int p1 = i;
        int p2 = i + 1;
        if (nums[p1] == nums[p2]) {
            return true;
        }
    }
    return false;
}


// Main

int main() {
    int nums[] = {1,5,3,2,5,4};
    size_t length = sizeof(nums) / sizeof(nums[0]);

    if (S2_contains_duplicate(nums, length)) {
        printf("S2: Array contains duplicate.\n");
    } else {
        printf("S2: Array does not contain duplicates.\n");
    }
}
