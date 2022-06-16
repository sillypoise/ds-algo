function FindAverageSubarray(arr: number[], k: number): number[] {
    return [];
}

function S1_FindAverageSubarray(arr: number[], k: number): number[] {
    let result: number[] = [];
    for (let i = 0; i < arr.length - k + 1; i++) {
        let sum = 0.0;
        for (let j = i; j < i + k; j++) {
            sum += arr[j];
        }
        result.push(sum / k);
    }
    return result;
}
function S2_FindAverageSubarray(arr: number[], k: number): number[] {
    let result: number[] = [];
    let windowSum = 0.0;
    let leftP = 0;
    for (let rightP = 0; rightP < arr.length; rightP++) {
        windowSum += arr[rightP];
        if (rightP >= k - 1) {
            result.push(windowSum / k);
            windowSum -= arr[leftP];
            leftP++;
        }
    }
    return result;
}

let arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
