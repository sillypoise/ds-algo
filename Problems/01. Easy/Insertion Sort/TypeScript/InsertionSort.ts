function InsertionSort(arr: number[]): number[] {
    return [];
}

function S1_InsertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            swap(j, j - 1, arr);
            j--;
        }
    }
    return arr;
}

function swap(i: number, j: number, arr: number[]) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

S1_InsertionSort([10, 45, 1, 63, 7, 89]);
