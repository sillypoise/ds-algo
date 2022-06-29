function TopKFrequent(nums: number[], k: number): number[] {
    return [];
}

function S2_TopKFrequent(nums: number[], k: number): number[] {
    // TODO HEAP SOLUTION
    return [];
}

function S3_TopKFrequent(nums: number[], k: number): number[] {
    let count: Map<number, number> = new Map();
    let freq = Array();

    for (let i = 0; i < nums.length + 1; i++) {
        freq.push([]);
    }

    let res: number[] = [];

    for (let num of nums) {
        if (!count.has(num)) {
            count.set(num, 0);
        } else {
            count.set(num, 1 + count.get(num)!);
        }
    }

    for (let tup of Array.from(count.entries())) {
        let [n, c] = tup;
        freq[c].push(n);
    }

    for (let i = freq.length - 1; i >= 0; i--) {
        for (let n of freq[i]) {
            res.push(n);
            if (res.length === k) return res;
        }
    }
    return [];
}

S3_TopKFrequent([1, 1, 1, 2, 2, 3], 2);
S3_TopKFrequent([3, 0, 1, 0], 1);
