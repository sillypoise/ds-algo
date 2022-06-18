class Node {
    constructor(public val?: number, public children?: Node[]) {
        this.val = val;
        this.children = [];
    }
    addChild(val: number) {
        this.children?.push(new Node(val));
    }

    S1_BreadthFirstSearch(): number[] {
        if (!this) return [];

        let arr: number[] = [];
        let queue: Node[] = [this];

        while (queue.length) {
            let node = queue.shift();
            if (node) {
                if (node.val) {
                    arr.push(node.val);
                }
                if (node.children?.length) {
                    for (let child of node.children) {
                        queue.push(child);
                    }
                }
            }
        }
        return arr;
    }

    S2_BreadthFirstSearch(arr: number[]): number[] {
        if (!this) return [];

        if (this.val) {
            arr.push(this.val);
        }
        if (this.children?.length) {
            for (let child of this.children) {
                child;
            }
        }
        return arr;
    }
}

function S1_BreadthFirstSearch(root: Node): number[] {
    if (!root) return [];

    let arr: number[] = [];
    let queue: Node[] = [root];

    while (queue.length) {
        let node = queue.shift();
        if (node) {
            if (node.val) {
                arr.push(node.val);
            }
            if (node.children?.length) {
                for (let child of node.children) {
                    queue.push(child);
                }
            }
        }
    }
    return arr;
}

function S2_BreadthFirstSearch(root: Node, arr: number[]): number[] {
    // TODO
    return arr;
}

export {};
