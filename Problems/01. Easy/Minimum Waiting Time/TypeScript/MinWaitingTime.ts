function MinWaitingTime(queries: number[]): number {
    return 0;
}

function S1_MinWaitingTime(queries: number[]): number {
    queries.sort((a, b) => a - b);

    let totalWaitingTime = 0;

    for (let i = 0; i < queries.length; i++) {
        let duration = queries[i];
        let queriesLeft = queries.length - (i + 1);
        totalWaitingTime += duration * queriesLeft;
    }

    return totalWaitingTime;
}

S1_MinWaitingTime([3, 2, 1, 2, 6]);
