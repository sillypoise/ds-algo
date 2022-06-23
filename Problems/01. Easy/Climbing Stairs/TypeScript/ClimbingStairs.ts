function ClimbingStairs(n: number): number {
    return 0;
}

function S1_ClimbingStairs(n: number): number {
    let one = 1;
    let two = 1;

    for (let i = 0; i < n - 1; i++) {
        let temp = one;
        one = one + two;
        two = temp;
    }
    return one;
}

function S2_ClimbingStairs(n: number): number {
    let arr: number[] = [];
    arr[1] = 1;
    arr[2] = 2;
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
}
