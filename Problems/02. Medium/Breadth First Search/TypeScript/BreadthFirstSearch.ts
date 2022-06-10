class Node {
    constructor(public val?: number, public children?: Node[]) {}
}

class Graph {
    constructor() {
        this.root = null;
    }
    root: Node;
}

export {};
