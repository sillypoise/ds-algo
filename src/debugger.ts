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
    S2_DepthFirstSearch() {
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

let t = new Node(4);
t.addChild(5);
t.addChild(7);
t.addChild(9);

if (t.children) t.children[0].addChild(12);
if (t.children) t.children[1].addChild(16);
if (t.children) t.children[2].addChild(20);

t.S1_DepthFirstSearch([]);
t.S2_DepthFirstSearch();

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

S1_DepthFirstSearch(t, []);
S2_DepthFirstSearch(t);
