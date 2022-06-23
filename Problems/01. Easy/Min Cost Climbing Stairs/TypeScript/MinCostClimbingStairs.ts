function MinCostClimbingStairs(cost: number[]): number {
    return 0;
}

function S1_MinCostClimbingStairs(cost: number[]): number {
    cost.push(0);

    for (let i = cost.length - 3; i >= 0; i--) {
        cost[i] += Math.min(cost[i + 1], cost[i + 2]);
    }

    // guaranteed that cost will have at least two values
    return Math.min(cost[0], cost[1]);
}
