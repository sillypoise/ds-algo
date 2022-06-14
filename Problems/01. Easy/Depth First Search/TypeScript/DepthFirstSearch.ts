class Node {
    constructor(public val?: number, public children?: Node[]) {
        this.val = val;
        this.children = [];
    }
    addChild(val: number) {
        this.children?.push(new Node(val));
    }

    S1_DepthFirstSearch(arr: number[]): number[] {
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

    S2_DepthFirstSearch(): number[] {
        let arr: number[] = [];
        let stack: Node[] = [this];
        while (stack.length) {
            let node = stack.pop();
            if (node) {
                if (node.val) {
                    arr.push(node.val);
                }
                if (node.children?.length) {
                    for (let i = node.children.length - 1; i >= 0; i--) {
                        let child = node.children[i];
                        stack.push(child);
                    }
                }
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

function S2_DepthFirstSearch(root: Node): number[] {
    let arr: number[] = [];
    let stack: Node[] = [root];
    while (stack.length) {
        let node = stack.pop();
        if (node) {
            if (node.val) {
                arr.push(node.val);
            }
            if (node.children?.length) {
                for (let i = node.children.length - 1; i >= 0; i--) {
                    let child = node.children[i];
                    stack.push(child);
                }
            }
        }
    }
    return arr;
}

export {};
