function containsDuplicate(nums: number[]): boolean {
    // ...
    return false;
}

// Solution 1: Brute Force
function S1_containsDuplicate(nums: Array<number>): boolean {
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

// Solution 2: Sort and Compare
function S2_containsDuplicate(nums: Array<number>): boolean {
    nums.sort((a, b) => a - b); // O(n log(n))
    for (let i = 0; i < nums.length - 1; i++) {
        // O(n)
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
}

// Solution 3: Set (Hash Table)
function S3_containsDuplicate(nums: Array<number>): boolean {
    const hash: Set<number> = new Set(); // O(n) space
    for (const num of nums) {
        // O(n) time
        if (hash.has(num)) {
            return true;
        }
        hash.add(num);
    }
    return false;
}
