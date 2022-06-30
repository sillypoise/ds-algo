function TwoSumII(nums: number[], target: number): [number, number] {
    return [-1, -1];
}

function S2_TwoSumII(nums: number[], target: number): [number, number] {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let currSum = nums[left] + nums[right];

        if (currSum > target) {
            right--;
        } else if (currSum < target) {
            left++;
        } else {
            return [left + 1, right + 1];
        }
    }
    return [-1, -1];
}

S2_TwoSumII([2, 7, 11, 15], 9);
S2_TwoSumII([2, 3, 4], 6);
