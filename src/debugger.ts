function S1_LongestConsecutiveSeq(nums: number[]): number {
    let set = new Set(nums);
    let longest = 0;

    for (let num of nums) {
        if (!set.has(num - 1)) {
            let length = 0;

            while (set.has(num + length)) {
                length++;
            }
            longest = Math.max(length, longest);
        }
    }
    return longest;
}

S1_LongestConsecutiveSeq([100, 4, 200, 1, 3, 2]);
