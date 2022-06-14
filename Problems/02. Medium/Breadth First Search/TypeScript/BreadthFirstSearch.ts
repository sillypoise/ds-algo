class Node {
    constructor(public val?: number, public children?: Node[]) {
        this.val = val;
        this.children = [];
    }
    addChild(val: number) {
        this.children?.push(new Node(val));
    }

    S1_BreadthFirstSearch(): number[] {
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
            return arr;
        }
    }
}

function S1_BreadthFirstSearch(root: Node): number[] {
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

export {};
