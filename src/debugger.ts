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

S1_ClimbingStairs(5);
