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
