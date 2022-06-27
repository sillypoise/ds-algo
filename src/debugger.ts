function S3_NthFib(n: number): number {
    let lastTwo = [0, 1];
    let counter = 3;

    while (counter <= n) {
        const nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter++;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0];
}

S3_NthFib(5);
