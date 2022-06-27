function BubbleSort(arr: number[]): number[] {
    return [];
}

function S1_BubbleSort(arr: number[]): number[] {
    let isSorted = false;
    let counter = 0;

    while (!isSorted) {
        isSorted = true;

        for (let i = 0; i < arr.length - 1 - counter; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(i, i + 1, arr);
                isSorted = false;
            }
        }
        counter++;
    }
    return arr;
}

function swap(i: number, j: number, arr: number[]) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

S1_BubbleSort([10, 45, 1, 63, 7, 89]);

export {};
