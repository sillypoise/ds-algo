function ClassPhoto(red: number[], blue: number[]): boolean {
    return false;
}

function S1_ClassPhoto(red: number[], blue: number[]): boolean {
    red.sort((a, b) => b - a);
    blue.sort((a, b) => b - a);

    let firstRow = red[0] < blue[0] ? "RED" : "BLUE";

    for (let i = 0; i < red.length; i++) {
        let redHeight = red[i];
        let blueHeight = blue[i];

        if (firstRow === "RED") {
            if (redHeight >= blueHeight) return false;
        } else {
            if (blueHeight >= redHeight) return false;
        }
    }
    return true;
}

S1_ClassPhoto([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]);
