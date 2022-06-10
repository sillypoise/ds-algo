class Node {
    constructor(public val?: number, public children?: Node[]) {
        this.val = val;
        this.children = [];
    }
    addChild(val: number) {
        this.children?.push(new Node(val));
    }

    S1_DepthFirstSearch(arr: number[]) {
        if (this.val) {
            arr.push(this.val);
        }
        if (this.children?.length) {
            for (let child of this.children) {
                child.S1_DepthFirstSearch(arr);
            }
        }
        return arr;
    }
}

function S1_DepthFirstSearch(root: Node, arr: number[]): number[] {
    if (root.val) {
        arr.push(root.val);
    }
    if (root.children?.length) {
        for (let child of root.children) {
            S1_DepthFirstSearch(child, arr);
        }
    }
    return arr;
}

export {};
