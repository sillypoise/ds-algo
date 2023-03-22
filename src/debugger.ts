// function S1_FindDuplicateNumber(nums: Array<number>): number {
//     let slowP = 0;
//     let fastP = 0;
//
//     while (true) {
//         slowP = nums[slowP];
//         fastP = nums[nums[fastP]];
//
//         if (slowP === fastP) {
//             break;
//         }
//     }
//     let slowP2 = 0;
//     while (true) {
//         slowP = nums[slowP];
//         slowP2 = nums[slowP2];
//         if (slowP === slowP2) return slowP;
//     }
// }
//
// S1_FindDuplicateNumber([1, 3, 4, 2, 2]);
// S1_FindDuplicateNumber([3, 1, 3, 4, 2]);

function diagonalDifference(arr: number[][]): number {
    let matix_size = arr.length;
    let primary_sum = 0;
    let secondary_sum = 0;

    for (let i = 0; i < matix_size; ++i) {
        primary_sum += arr[i][i];
        secondary_sum += arr[i][matix_size - i - 1];
    }

    return Math.abs(primary_sum - secondary_sum);
}

diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
]);
