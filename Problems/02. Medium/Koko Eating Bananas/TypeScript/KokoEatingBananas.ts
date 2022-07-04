function KokoEatingBananas(piles: number[], h: number): number {
    return -1;
}

function S1_KokoEatingBananas(piles: number[], h: number): number {
    return -1;
}

function S2_KokoEatingBananas(piles: number[], h: number): number {
    let left = 1;
    let right = Math.max(...piles);

    let res = right;

    while (left <= right) {
        let k = Math.floor((left + right) / 2);
        let hours = 0;

        for (let pile of piles) {
            hours += Math.ceil(pile / k);
        }

        if (hours <= h) {
            res = Math.min(res, k);
            right = k - 1;
        } else {
            left = k + 1;
        }
    }
    return res;
}

S2_KokoEatingBananas([3, 6, 7, 11], 8);
