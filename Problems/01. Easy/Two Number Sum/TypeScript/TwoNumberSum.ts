import { describe, expect, it, test } from "vitest";

function TwoNumberSum(nums: number[], target: number): number[] {
    return [];
}

function S1_TwoNumberSum(nums: number[], target: number): number[] {
    if (nums.length <= 1) return [];
    // O(n)
    for (let i = 0; i < nums.length - 1; i++) {
        let valueI = nums[i];
        // O(n)
        for (let j = i + 1; j < nums.length; j++) {
            let valueJ = nums[j];
            if (valueI + valueJ === target) return [i, j];
        }
    }
    return [];
}

function S2_TwoNumberSum(nums: number[], target: number): number[] {
    if (nums.length <= 1) return [];
    // O(n)
    const hash: Record<number, boolean> = {};
    // O(n)
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let solveFor = target - num;
        if (solveFor in hash) return [nums.indexOf(solveFor), i];
        hash[num] = true;
    }
    return [];
}

function S3_TwoNumberSum(nums: number[], target: number): number[] {
    if (nums.length <= 1) return [];
    // O(n log n)
    nums.sort((a, b) => a - b);
    let leftP = 0;
    let rightP = nums.length - 1;
    while (leftP < rightP) {
        const currentSum = nums[leftP] + nums[rightP];
        if (currentSum === target) {
            // If we want to return actual numbers confoming the sum
            return [nums[leftP], nums[rightP]];
        } else if (currentSum < target) {
            leftP++;
        } else if (currentSum > target) {
            rightP--;
        }
    }
    return [];
}

// If we want to return indices of original array, we sacrifice memory
function S4_TwoNumberSum(nums: number[], target: number): number[] {
    if (nums.length <= 1) return [];

    // 💾 O(n)
    let sortedIndexList = nums.map((elem, i) => ({
        value: elem,
        ogIndex: i,
    }));

    // ⌚ O(n log n)
    sortedIndexList.sort((a, b) => a.value - b.value);
    let leftP = 0;
    let rightP = sortedIndexList.length - 1;
    while (leftP < rightP) {
        const currentSum =
            sortedIndexList[leftP].value + sortedIndexList[rightP].value;
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

test("Two Number Sum", () => {
    // expect(TwoNumberSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    // expect(TwoNumberSum([3, 2, 4], 6)).toEqual([2, 1]);
    // expect(TwoNumberSum([9, 2, 7, 11, 15], 12)).toEqual([]);
    // expect(TwoNumberSum([11], 12)).toEqual([]);
});
