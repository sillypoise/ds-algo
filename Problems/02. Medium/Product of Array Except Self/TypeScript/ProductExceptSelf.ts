function ProductExceptSelf(nums: number[]): number[] {
    return [];
}

function S1_ProductExceptSelf(nums: number[]): number[] {
    let res = Array(nums.length).fill(1);
    let prefix = 1;
    let postfix = 1;

    for (let i = 0; i < nums.length; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= postfix;
        postfix *= nums[i];
    }

    return res;
}

S1_ProductExceptSelf([1, 2, 3, 4]);
