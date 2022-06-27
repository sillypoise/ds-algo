function FindThreeLargestNumbers(
    nums: number[]
): [number, number, number] | null[] {
    return [];
}

function S1_FindThreeLargestNumbers(
    nums: number[]
): [number, number, number] | null[] {
    let threeLargest = [null, null, null];
    for (let num of nums) {
        if (threeLargest[2] === null || num > threeLargest[2]) {
            shiftAndUpdate(threeLargest, num, 2);
        } else if (threeLargest[1] === null || num > threeLargest[1]) {
            shiftAndUpdate(threeLargest, num, 1);
        } else if (threeLargest[0] === null || num > threeLargest[0]) {
            shiftAndUpdate(threeLargest, num, 0);
        }
    }

    return threeLargest;
}

function shiftAndUpdate(
    arr: number[] | null[],
    num: number | null,
    idx: number
) {
    for (let i = 0; i <= idx; i++) {
        if (i === idx) {
            arr[i] = num;
        } else {
            arr[i] = arr[i + 1];
        }
    }
}

S1_FindThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]);
