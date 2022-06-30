function LongestConsecutiveSeq(nums: number[]): number {
    return -1;
}

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
