function SortedSquaresArray(nums: number[]): number[] {
    return [];
}

function S1_SortedSquaresArray(nums: number[]): number[] {
    let res = nums.map((elem) => Math.pow(elem, 2)).sort((a, b) => a - b);
    return res;
}

function S2_SortedSquaresArray(nums: number[]): number[] {
    let res: number[] = [];
    let i = 0;
    let j = nums.length - 1;

    for (let k = nums.length - 1; k >= 0; k--) {
        let left = nums[i];
        let right = nums[j];

        if (Math.abs(left) > Math.abs(right)) {
            res[k] = Math.pow(left, 2);
            i++;
        } else {
            res[k] = Math.pow(right, 2);
            j--;
        }
    }
    return res;
}

function S2_SortedSquaresArray_V2(nums: number[]): number[] {
    let res: number[] = [];
    let i = 0;
    let j = nums.length - 1;

    for (let k = nums.length - 1; k >= 0; k--) {
        let left = Math.abs(Math.pow(nums[i], 2));
        let right = Math.abs(Math.pow(nums[j], 2));

        res[k] = Math.max(left, right);

        if (left > right) {
            i++;
        } else {
            j--;
        }
    }
    return res;
}

function S3_SortedSquaresArray(nums: number[]): number[] {
    let i = 0;
    let j = nums.length - 1;
    let res: number[] = [];

    while (i <= j) {
        let p1 = Math.abs(Math.pow(nums[i], 2));
        let p2 = Math.abs(Math.pow(nums[j], 2));
        res.push(Math.max(p1, p2));
        if (p1 >= p2) {
            i++;
        } else {
            j--;
        }
    }
    return res.reverse();
}

S1_SortedSquaresArray([1, 2, 3, 5, 6, 8, 9]);
S1_SortedSquaresArray([-7, -5, -4, 3, 6, 8, 9]);
S2_SortedSquaresArray([-4, -1, 0, 3, 10]);
