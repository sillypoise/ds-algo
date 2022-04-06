function containsDuplicate(nums: number[]) {
  for (let i: number = 0; i < nums.length; i++) {
    let numToCompare = nums[i];
    for (let j: number = i + 1; j < nums.length; j++) {
      let compareAgainst = nums[j];
      if (numToCompare === compareAgainst) {
        return true;
      }
    }
  }
  return false;
}

containsDuplicate([1, 2, 3, 4, 4]);
