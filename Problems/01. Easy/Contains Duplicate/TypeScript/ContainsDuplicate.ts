function containsDuplicate(nums: number[]) {
  const hash: Record<number, number> = {}; // O(n) space
  for (const num of nums) { // O(n) time
    if (num in hash) {
      return true;
    } else {
      hash[num] = num;
    }
  }
  return false;
}

containsDuplicate([1, 2, 3, 4, 4]);
containsDuplicate([1, 2, 3, 4]);
