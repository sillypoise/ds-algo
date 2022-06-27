function SelectionSort(arr: number[]): number[] {
    return [];
}

function S1_SelectionSort(arr: number[]): number[] {
    let startIdx = 0;
    while (startIdx < arr.length - 1) {
        let smallestIdx = startIdx;

        for (let i = startIdx + 1; i < arr.length; i++) {
            if (arr[smallestIdx] > arr[i]) smallestIdx = i;
        }
        swap(startIdx, smallestIdx, arr);
        startIdx++;
    }
    return arr;
}

function swap(i: number, j: number, arr: number[]) {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

S1_SelectionSort([10, 45, 1, 63, 7, 89]);

export {};
