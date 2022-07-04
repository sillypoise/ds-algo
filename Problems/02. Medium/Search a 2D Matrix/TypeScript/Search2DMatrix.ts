function Search2DMatrix(matrix: number[][], target: number): boolean {
    return false;
}

function S1_Search2DMatrix(matrix: number[][], target: number): boolean {
    return false;
}

function S2_Search2DMatrix(matrix: number[][], target: number): boolean {
    return false;
}

function S3_Search2DMatrix(matrix: number[][], target: number): boolean {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let top = 0;
    let bottom = rows - 1;

    while (top <= bottom) {
        let row = Math.floor((top + bottom) / 2);
        if (target > matrix[row][matrix[row].length - 1]) {
            top = row + 1;
        } else if (target < matrix[row][0]) {
            bottom = row - 1;
        } else {
            break;
        }
    }

    if (!(top <= bottom)) return false;

    let row = Math.floor((top + bottom) / 2);
    let left = 0;
    let right = cols - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (target > matrix[row][middle]) {
            left = middle + 1;
        } else if (target < matrix[row][middle]) {
            right = middle - 1;
        } else {
            return true;
        }
    }
    return false;
}

S3_Search2DMatrix(
    [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
    ],
    3
);
