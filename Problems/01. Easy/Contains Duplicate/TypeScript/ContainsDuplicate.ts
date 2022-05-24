import { describe, expect, it, test } from "vitest";

function containsDuplicate(nums: number[]): boolean {
  // ...
  return;
}

function S1_containsDuplicate(nums: number[]): boolean {
  for (let i = 0; i < nums.length - 1; i++) {
    // O(n)
    let numToCompare = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      // O(n)
      let compareAgainst = nums[j];
      if (numToCompare === compareAgainst) return true;
    }
  }
  return false;
}

function S2_containsDuplicate(nums: number[]): boolean {
  nums.sort((a, b) => a - b);
  // O(n log(n))
  for (let i = 0; i < nums.length; i++) {
    // O(n)
    let firstPointer = nums[i];
    let secondPointer = nums[i + 1];
    if (firstPointer === secondPointer) {
      return true;
    }
  }
  return false;
}

function S3_containsDuplicate(nums: number[]): boolean {
  const hash: Record<number, boolean> = {}; // O(n) space
  for (const num of nums) {
    // O(n) time
    if (num in hash) {
      return true;
    }
    hash[num] = true;
  }
  return false;
}

test("Contains Duplicate", () => {
  // expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  // expect(containsDuplicate([1, 2, 3, 4, 4])).toBe(true);
});
