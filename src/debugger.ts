function S3_NthFib(n: number): number {
    if (n === 0) return 0;

    let lastTwo = [1, 1];
    let counter = 3;

    while (counter <= n) {
        let nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter++;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0];
}

S3_NthFib(3);
