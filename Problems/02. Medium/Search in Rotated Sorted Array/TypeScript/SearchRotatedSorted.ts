function SearchRotatedSorted(nums: number[], target: number): number {
    return -1;
}

function S1_SearchRotatedSorted(nums: number[], target: number): number {
    return -1;
}

function S2_SearchRotatedSorted(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            if (target > nums[mid] || target < nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if (target < nums[mid] || target > nums[right]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return -1;
}

S2_SearchRotatedSorted([4, 5, 6, 7, 0, 1, 2], 0);
