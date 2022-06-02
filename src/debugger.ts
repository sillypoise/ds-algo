function BestTimeToBuyAndSellStock(prices: number[]): number {
    if (prices.length <= 1) return 0;

    let leftP = 0;
    let rightP = leftP + 1;
    let maxProfit = 0;
    // ⌚ O(n)
    while (rightP < prices.length - 1) {
        if (prices[leftP] > prices[rightP]) {
            leftP = rightP;
        } else {
            let profit = prices[rightP] - prices[leftP];
            maxProfit = Math.max(maxProfit, profit);
        }
        rightP++;
    }
    return maxProfit;
}

BestTimeToBuyAndSellStock([7, 1, 5, 3, 6, 4]);
