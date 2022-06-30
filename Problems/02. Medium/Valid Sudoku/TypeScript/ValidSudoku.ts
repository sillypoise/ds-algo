function ValidSudoku(board: string[][]): boolean {
    return false;
}

function S1_ValidSudoku(board: string[][]): boolean {
    // Handler to return a new Set when accessing a non existent property on a Map
    let proxyHandler: ProxyHandler<Record<string, Set<string>>> = {
        get: (target: Record<string, Set<string>>, name: string) =>
            name in target ? target[name] : (target[name] = new Set()),
    };

    let cols = new Proxy({}, proxyHandler);
    let rows = new Proxy({}, proxyHandler);
    let grid = new Proxy({}, proxyHandler);

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === ".") continue;

            let gridRow = Math.floor(r / 3);
            let gridCol = Math.floor(c / 3);
            let gridKey = [gridRow, gridCol].toString();

            if (
                rows[r].has(board[r][c]) ||
                cols[c].has(board[r][c]) ||
                grid[gridKey].has(board[r][c])
            ) {
                return false;
            }

            cols[c].add(board[r][c]);
            rows[r].add(board[r][c]);
            grid[gridKey].add(board[r][c]);
        }
    }
    return true;
}

S1_ValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);
