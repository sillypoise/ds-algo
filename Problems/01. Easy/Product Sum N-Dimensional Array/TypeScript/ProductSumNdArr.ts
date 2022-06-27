function ProductSumNdArr(arr: number[]): number {
    return 0;
}

function S1_ProductSumNdArr(arr: number[], multiplier: number = 1): number {
    let sum = 0;

    for (let element of arr) {
        if (Array.isArray(element)) {
            sum += S1_ProductSumNdArr(element, multiplier + 1);
        } else {
            sum += element;
        }
    }
    return sum * multiplier;
}
