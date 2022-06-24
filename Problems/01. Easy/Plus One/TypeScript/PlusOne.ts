function PlusOne(digits: number[]): number[] {
    return [];
}

function S1_PlusOne(digits: number[]): number[] {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] = digits[i] + carry;
        if (digits[i] >= 10) {
            carry = 1;
            digits[i] = digits[i] - 10;
        } else {
            carry = 0;
        }
    }
    if (carry) digits.unshift(1);
    return digits;
}

S1_PlusOne([1, 2, 3]);
