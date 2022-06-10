class Node {
    constructor(public val?: number, public children?: Node[]) {
        this.val = val;
        this.children = [];
    }
    addChild(val: number) {
        this.children?.push(new Node(val));
    }

    DepthFirstSearch(arr: number[]) {
        if (this.val) {
            arr.push(this.val);
        }
        if (this.children?.length) {
            for (let child of this.children) {
                child.DepthFirstSearch(arr);
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

t.DepthFirstSearch([]);

function dfs(root: Node, arr: number[]): number[] {
    if (root.val) {
        arr.push(root.val);
    }
    if (root.children?.length) {
        for (let child of root.children) {
            dfs(child, arr);
        }
    }
    return arr;
}

dfs(t, []);
