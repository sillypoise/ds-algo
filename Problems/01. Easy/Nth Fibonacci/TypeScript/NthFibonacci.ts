function NthFib(n: number): number {
    return 0;
}

function S1_NthFib(n: number): number {
    if (n === 2) {
        return 1;
    } else if (n === 1) {
        return 0;
    } else {
        return S1_NthFib(n - 1) + S1_NthFib(n - 2);
    }
}

function S2_NthFib(
    n: number,
    memo: Record<number, number> = { 1: 0, 2: 1 }
): number {
    if (n in memo) {
        return memo[n];
    } else {
        memo[n] = S2_NthFib(n - 1, memo) + S2_NthFib(n - 2, memo);
        return memo[n];
    }
}

function S3_NthFib(n: number): number {
    let lastTwo = [0, 1];
    let counter = 3;

    while (counter <= n) {
        let nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter += 1;
    }
    return n > 0 ? lastTwo[1] : lastTwo[0];
}

S3_NthFib(5);
