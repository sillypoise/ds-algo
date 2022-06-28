function TandemBicycle(
    red: number[],
    blue: number[],
    fastest: boolean = true
): number {
    return 0;
}

function S1_TandemBicycle(
    red: number[],
    blue: number[],
    fastest: boolean = true
): number {
    red.sort((a, b) => a - b);
    blue.sort((a, b) => a - b);

    if (!fastest) {
        red.reverse();
    }

    let totalSpeed = 0;

    for (let i = 0; i < red.length; i++) {
        let rider1 = red[i];
        let rider2 = blue[blue.length - i - 1];
        totalSpeed += Math.max(rider1, rider2);
    }
    return totalSpeed;
}

S1_TandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true);
export {};
