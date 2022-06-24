function HappyNumber(n: number): boolean {
    return false;
}

function S1_HappyNumber(n: number): boolean {
    let visited: Set<number> = new Set();

    while (!visited.has(n)) {
        visited.add(n);
        n = sumOfSquares(n);

        if (n === 1) return true;
    }
    return false;
}

function sumOfSquares(n: number): number {
    let output = 0;
    while (n) {
        let digit = n % 10;
        digit = digit ** 2;
        output += digit;
        n = Math.floor(n / 10);
    }
    return output;
}

S1_HappyNumber(19);
S1_HappyNumber(2);
