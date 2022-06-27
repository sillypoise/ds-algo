function S1_ProductSumNdArr(arr: any[], multiplier: number = 1): number {
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

S1_ProductSumNdArr([5, 2, [7, -1], 3, [6, [-13, 8], 4]]);
