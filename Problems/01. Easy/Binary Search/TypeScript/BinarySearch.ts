function BinarySearch(nums: number[], target: number): number {
    return -1;
}

function S1_BinarySearch(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.round((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}
