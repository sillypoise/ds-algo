function BinarySearch(nums: number[], target: number): number {
    return -1;
}

function S1_BinarySearch(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let pivot = Math.round((left + right) / 2);
        if (nums[pivot] === target) return pivot;
        if (nums[pivot] > target) {
            right = pivot - 1;
        } else {
            left = pivot + 1;
        }
    }
    return -1;
}

function S2_BinarySearch(nums: number[], target: number): number {
    function binarySearchHelper(
        nums: number[],
        target: number,
        left: number = 0,
        right: number = nums.length - 1
    ) {
        if (left > right) return -1;
        let pivot = Math.floor((left + right) / 2);

        if (nums[pivot] === target) return pivot;
        if (nums[pivot] > target) {
            return binarySearchHelper(nums, target, left, pivot - 1);
        } else {
            return binarySearchHelper(nums, target, pivot + 1, right);
        }
    }

    return binarySearchHelper(nums, target, 0, nums.length - 1);
}
