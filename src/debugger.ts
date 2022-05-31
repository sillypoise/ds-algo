function TwoNumberSum(nums: number[], target: number): number[] {
    if (nums.length <= 1) return [];
    // O(n log n)
    let sortedIndexList = nums.map((elem, i) => ({
        val: elem,
        ogIndex: i,
    }));

    sortedIndexList.sort((a, b) => a.val - b.val);
    let leftP = 0;
    let rightP = sortedIndexList.length - 1;
    while (leftP < rightP) {
        const currentSum =
            sortedIndexList[leftP].val + sortedIndexList[rightP].val;
        if (currentSum === target)
            return [
                sortedIndexList[leftP].ogIndex,
                sortedIndexList[rightP].ogIndex,
            ];
        else if (currentSum < target) leftP++;
        else if (currentSum > target) rightP--;
    }
    return [];
}

TwoNumberSum([3, 2, 4], 6);
