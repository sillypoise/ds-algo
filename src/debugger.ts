function S2_SortedSquaresArray(nums: number[]): number[] {
    let res: number[] = [];
    let leftP = 0;
    let rightP = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        let left = nums[leftP];
        let right = nums[rightP];

        if (Math.abs(left) > Math.abs(right)) {
            res[i] = Math.pow(left, 2);
            leftP++;
        } else {
            res[i] = Math.pow(right, 2);
            right--;
        }
    }
    return res;
}

S2_SortedSquaresArray([-4, -1, 0, 3, 10]);
