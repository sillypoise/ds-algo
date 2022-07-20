function FindDuplicateNumber(nums: Array<number>): number {
    return 0;
}

function S1_FindDuplicateNumber(nums: Array<number>): number {
    let slowP = 0;
    let fastP = 0;

    while (true) {
        slowP = nums[slowP];
        fastP = nums[nums[fastP]];

        if (slowP === fastP) {
            break;
        }
    }
    let slowP2 = 0;
    while (true) {
        slowP = nums[slowP];
        slowP2 = nums[slowP2];
        if (slowP === slowP2) return slowP;
    }
}

S1_FindDuplicateNumber([1, 3, 4, 2, 2]);
S1_FindDuplicateNumber([3, 1, 3, 4, 2]);
