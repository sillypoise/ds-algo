function S1_NonConstructibleChange(coins: number[]): number {
    coins.sort((a, b) => a - b);

    let currChange = 0;

    for (let coin of coins) {
        if (coin > currChange + 1) {
            return currChange + 1;
        }
        currChange += coin;
    }

    return currChange + 1;
}

S1_NonConstructibleChange([5, 7, 1, 1, 2, 3, 22]);
